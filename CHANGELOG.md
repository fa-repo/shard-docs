# Changelog
All notable changes to this project will be documented in this file starting from v4.0.0.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- Fix react-router not adding pages to history
- Fix CodeExampleShard crashing when more than one child was provided
- Fix inability to toggle SectionShard without providing an id.
### Removed
- Support for headings
### Changed
- [Breaking change] Source schema
- Terminology: Groups are now referred to as folders. Pages are now referred to as documents.
- Source data is now prepared in an adapter file.
- Remove support for custom doc / folder slugs

## [4.1.0] - 2019-09-27
### Fixed
- Sidebar-structure doc crashing on load
### Removed
- Box shadow from CodeExampleShard as well as noShadow prop
### Changed
- [BREAKING CHANGE] Renamed tree prop to source
- Instead of one page per route, changed to a refinement system where all pages below the current path are shown
- Turned sidebar group headings into links
- Add icons to CodeExampleShard menu
- Hide source code by default in CodeExampleShard. Toggles from a button in the menu
- Update CodeExampleShard styles
- Update ShardDocs styles
- Made responsive
- Update table style

## [4.0.6] - 2019-09-03
### Fixed
- CodeExampleShard not updating content on route change

## [4.0.5] - 2019-08-31
### Changed
- Table th/td lineheight from 1.8 to 1.6

## [4.0.4] - 2019-08-24
### Remove
- Elusive console.log

## [4.0.3] - 2019-08-24
### Add
- Ability to add classes to shards

## [4.0.2] - 2019-08-22
### Fixed
- Top level external links not getting combined into discrete groups

## [4.0.1] - 2019-08-22
### Fixed
- Pages not showing up in discrete groups
### Changed
- Combine all top level adjacent pages into discrete groups by default.
- Disable pages with empty compositions in sidebar.

## [4.0.0] - 2019-08-21
### Added
- CHANGELOG to document the development of @fa-repo/shard-docs.
- Github release tagging

[Unreleased]: https://github.com/fa-repo/shard-docs/compare/v4.1.0...HEAD
[4.1.0]: https://github.com/fa-repo/shard-docs/compare/v4.0.6...v4.1.0
[4.0.6]: https://github.com/fa-repo/shard-docs/compare/v4.0.5...v4.0.6
[4.0.5]: https://github.com/fa-repo/shard-docs/compare/v4.0.4...v4.0.5
[4.0.4]: https://github.com/fa-repo/shard-docs/compare/v4.0.3...v4.0.4
[4.0.3]: https://github.com/fa-repo/shard-docs/compare/v4.0.2...v4.0.3
[4.0.2]: https://github.com/fa-repo/shard-docs/compare/v4.0.1...v4.0.2
[4.0.1]: https://github.com/fa-repo/shard-docs/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/fa-repo/shard-docs/compare/v3.1.0...v4.0.0