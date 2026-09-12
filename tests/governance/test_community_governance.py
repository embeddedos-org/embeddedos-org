from __future__ import annotations

import hashlib
import re
import unittest
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[2]
POLICY_SHA = "92cb596c773496ec4df76717e8acf0e6b7700f73"
WIKI_HASHES = {
    "Development.md": "1f5282b07ef207cd63807da0b77e739329707debc7bfb1bdddcda121607e6fe3",
    "FAQ.md": "e6a54329e9aa3fc8fd36e322b384e9cc317480094eca79a47d6ff85a4cfdf5a7",
    "Getting-Started.md": "63292a509d36eb9cd33536e08c9e075da1ddcbb8f9f6aafa17f841c3659174f5",
    "Home.md": "e2a4de9cf02de0f60b234b3f57739b7c4d809aaae4a47d3220fb67c697739915",
    "Security.md": "2939b05847d927b761ba81214c830371f3e60dc22e612bdcc6e579fc32c7e1de",
    "_Sidebar.md": "0464454469c18fab9655fdf7b00abd2afddc5dbba6e7855333cadc3989e37f0a",
}
COMMUNITY_URLS = {
    "https://github.com/embeddedos-org/embeddedos-org/wiki",
    "https://github.com/embeddedos-org/embeddedos-org/discussions",
    "https://github.com/embeddedos-org/embeddedos-org/issues",
    "https://github.com/orgs/embeddedos-org/projects",
    "https://github.com/embeddedos-org/embeddedos-org/blob/master/AGENTS.md",
}


class CommunityGovernanceTest(unittest.TestCase):
    def test_linked_issue_workflow_pins_uses_and_policy_ref(self):
        workflow = (
            ROOT / ".github" / "workflows" / "linked-issue.yml"
        ).read_text(encoding="utf-8")
        parsed = yaml.safe_load(workflow)
        self.assertIsInstance(parsed, dict)
        triggers = parsed.get("on", parsed.get(True, {}))
        self.assertIn("pull_request_target", triggers)
        self.assertIn(
            "uses: embeddedos-org/.github/.github/workflows/"
            f"linked-issue-policy.yml@{POLICY_SHA}",
            workflow,
        )
        self.assertIn(f"policy_ref: {POLICY_SHA}", workflow)
        self.assertNotIn("permissions: write", workflow)
        self.assertNotIn("write-all", workflow)

    def test_pull_request_template_requires_same_repository_closing_issue(self):
        template = (
            ROOT / ".github" / "PULL_REQUEST_TEMPLATE.md"
        ).read_text(encoding="utf-8")
        self.assertTrue(template.startswith("# Pull request\n"))
        self.assertLess(template.index("## Closing issue"), template.index("## Summary"))
        self.assertIn("Fixes #ISSUE_NUMBER", template)
        self.assertIn("Cross-repository", template)
        self.assertIn("organization landing index", template)

    def test_versioned_wiki_matches_exact_published_pages(self):
        versioned = ROOT / "docs" / "wiki"
        self.assertEqual(
            {path.name for path in versioned.glob("*.md")},
            set(WIKI_HASHES),
        )
        for name, expected_hash in WIKI_HASHES.items():
            actual_hash = hashlib.sha256((versioned / name).read_bytes()).hexdigest()
            self.assertEqual(actual_hash, expected_hash, name)

    def test_wiki_page_links_resolve_under_github_wiki_convention(self):
        versioned = ROOT / "docs" / "wiki"
        expected_pages = {path.stem for path in versioned.glob("*.md")}
        for path in versioned.glob("*.md"):
            text = path.read_text(encoding="utf-8")
            for target in ("Home", "Getting-Started", "Development", "Security", "FAQ"):
                if f"]({target})" in text:
                    self.assertIn(target, expected_pages, f"{path.name}: {target}")

    def test_readme_and_site_chrome_publish_all_community_urls(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        chrome = (ROOT / "js" / "site-chrome.js").read_text(encoding="utf-8")
        for url in COMMUNITY_URLS:
            self.assertIn(url, readme)
            self.assertIn(url, chrome)

    def test_no_agents_route_is_introduced(self):
        changed_surfaces = [
            ROOT / "README.md",
            ROOT / "AGENTS.md",
            ROOT / "js" / "site-chrome.js",
        ]
        route_pattern = re.compile(
            r"(?:href\s*=\s*['\"]|href:\s*['\"]|\]\()/agents(?:[/#?'\")]|$)",
            re.IGNORECASE,
        )
        for path in changed_surfaces:
            self.assertIsNone(route_pattern.search(path.read_text(encoding="utf-8")), path)


if __name__ == "__main__":
    unittest.main()
