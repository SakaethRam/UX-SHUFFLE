# UX-SHUFFLE

### Design System Distribution Engine

> **Clone once. Shuffle what you need. Build faster.**

UX-SHUFFLE is a developer-oriented UI/UX distribution repository designed to make reusable interface work easy to discover, select, and move into a local project.

Instead of manually browsing a repository, copying folders, navigating between directories, and repeatedly moving UI assets around, UX-SHUFFLE provides an interactive command-line workflow for selecting the interface modules you need and transferring them directly into your project.

<img width="1800" height="1000" alt="ZREX SHUFFLE" src="https://github.com/user-attachments/assets/7cb04ad4-7919-4795-b41f-41be5a512908" />

---

## What is UX-SHUFFLE?

UX-SHUFFLE is built around a simple idea:

**UI should be reusable without becoming repetitive to integrate.**

The repository acts as a centralized collection of interface projects, experiments, design systems, layouts, components, and visual implementations.

A developer can clone the repository, inspect the available projects, select what they want, and transfer those selected directories into another local project.

Instead of manually doing:

```bash
cp -r ./Portfolio ../my-project/
cp -r ./CAROUSEL-UX ../my-project/
cp -r ./Meta ../my-project/
```

UX-SHUFFLE aims to provide:

```bash
ux-shuffle
```

followed by an interactive selection and transfer experience.

---

# Why UX-SHUFFLE?

Modern development often involves assembling interfaces from multiple sources:

* previous projects
* design experiments
* reusable components
* landing pages
* dashboards
* authentication interfaces
* visual systems
* interaction patterns
* assets
* typography
* layout systems

The actual problem isn't creating these pieces.

The problem is **moving the right pieces into the right project without unnecessary friction**.

UX-SHUFFLE turns that process into a deliberate workflow.

```text
Traditional

Find → Open folder → Copy → Navigate → Paste
      → Check files → Repeat → Clean up


UX-SHUFFLE

Clone → Select → Shuffle → Build
```

---

# Setting Up UX-SHUFFLE

## 1. Clone the repository & Enter the repository

```bash
git clone https://github.com/SakaethRam/UX-SHUFFLE.git && cd UX-SHUFFLE
```

## 2. Install the CLI dependencies & Launch UX-SHUFFLE

```bash
npm install && npm run setup
```

The interactive terminal interface will discover the available projects and allow you to select which ones you want to transfer.

---

# CLI Experience

UX-SHUFFLE is intentionally designed as an interactive terminal experience rather than a collection of plain shell commands.

When launched, it begins with a branded boot sequence:

```text
        ██╗   ██╗██╗  ██╗
        ██║   ██║╚██╗██╔╝
        ██║   ██║ ╚███╔╝
        ╚██╗ ██╔╝ ██╔██╗
         ╚████╔╝ ██╔╝ ██╗
          ╚═══╝  ╚═╝  ╚═╝

              U X - S H U F F L E

       DESIGN SYSTEM DISTRIBUTION ENGINE
```

The CLI then performs several stages:

```text
INITIALIZING
     ↓
SCANNING
     ↓
INDEXING
     ↓
DISCOVERING
     ↓
SELECTING
     ↓
TRANSFERRING
     ↓
VERIFYING
     ↓
COMPLETE
```

The animation is not intended to simulate meaningless processing.

Each stage corresponds to an actual operation performed by the CLI.

---

# Target Directory

After selection, UX-SHUFFLE asks where the selected projects should be transferred.

Example:

```text
TARGET DIRECTORY

> ../my-project
```

The target can be:

```text
../my-project
```

or:

```text
../frontend
```

or:

```text
C:\Projects\my-app
```

or any other valid local directory.

---

# Shuffle Engine

Once the target is confirmed, UX-SHUFFLE visually represents the transfer:

```text
SOURCE
./UX-SHUFFLE

        ↓

┌─────────────────────┐
│     UX-SHUFFLE      │
│       ENGINE        │
└──────────┬──────────┘
           │
           ↓

TARGET
../my-project
```

Selected collections are then copied into the target directory.

---

# Transfer Model

UX-SHUFFLE uses **copy semantics**, not destructive move semantics.

That distinction is intentional.

The original repository remains intact.

For example:

```text
UX-SHUFFLE/
│
├── Portfolio/
├── Meta/
└── CAROUSEL-UX/
```

After shuffling:

```text
UX-SHUFFLE/
│
├── Portfolio/
├── Meta/
└── CAROUSEL-UX/


my-project/
│
├── Portfolio/
├── Meta/
└── CAROUSEL-UX/
```

The source remains available for future use.

---

# Why "Shuffle"?

The name represents the core interaction.

UX-SHUFFLE does not require you to consume the entire repository as one monolithic package.

Instead, you choose the pieces you want.

```text
               UX-SHUFFLE

       ┌────────┬────────┬────────┐
       │        │        │        │
       ▼        ▼        ▼        ▼
    PROJECT   PROJECT  PROJECT  PROJECT
       │        │        │        │
       └─────── SELECT ───────────┘
                    │
                    ▼
               YOUR PROJECT
```

The repository becomes a pool of reusable interface work.

You decide what gets shuffled into your project.

---

# Architecture

The CLI follows a simple architecture:

```text
┌─────────────────────────────────────────┐
│              UX-SHUFFLE CLI             │
├─────────────────────────────────────────┤
│                                         │
│  Terminal Interface                     │
│          │                              │
│          ▼                              │
│  Repository Scanner                     │
│          │                              │
│          ▼                              │
│  Project Discovery                      │
│          │                              │
│          ▼                              │
│  Interactive Selection                  │
│          │                              │
│          ▼                              │
│  Target Resolver                        │
│          │                              │
│          ▼                              │
│  Transfer Engine                        │
│          │                              │
│          ▼                              │
│  Local Filesystem                       │
│                                         │
└─────────────────────────────────────────┘
```

---

# Repository Discovery

The CLI does not need to hard-code every project name.

Instead, it scans the repository root and identifies directories that can be distributed.

Conceptually:

```js
const entries = await fs.readdir(ROOT, {
  withFileTypes: true
});

const projects = entries
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);
```

This allows the collection to evolve naturally.

Adding a new project directory automatically makes it discoverable.

---

# Transfer Engine

The transfer engine is responsible for copying selected projects to the target directory.

Conceptually:

```text
SOURCE
  ↓
Validate
  ↓
Create target
  ↓
Copy selected projects
  ↓
Count transferred files
  ↓
Report results
```

A transfer might look like:

```text
SHUFFLING Portfolio       84 files
SHUFFLING CAROUSEL-UX     112 files
SHUFFLING Meta            51 files

────────────────────────────────────

SHUFFLE COMPLETE

3 PROJECTS • 247 FILES

Your interface has been shuffled.
```

---

# Safety

UX-SHUFFLE is designed to avoid destructive operations by default.

The source directories are **copied**, not deleted.

The CLI should also confirm the target before performing the transfer.

Example:

```text
Shuffle 3 project(s) into:

../my-project

? Continue
```

This prevents accidental transfers caused by an incorrect target path.

---

# Project Naming

UX-SHUFFLE treats each top-level directory as a potential distribution unit.

For example:

```text
Arkin-MetaLib
Arkin-X-Production
CAROUSEL-UX
Meta
Portfolio
```

This creates a simple mental model:

```text
ONE DIRECTORY
      =
ONE DISTRIBUTION UNIT
```

As the repository grows, the same model can be extended to finer-grained modules.

---

# Module Support

The current architecture can be extended beyond top-level projects.

For example:

```text
Portfolio/
│
├── landing/
├── navigation/
├── components/
├── animations/
└── assets/
```

The CLI could eventually allow:

```text
Portfolio
 ├── landing
 ├── navigation
 ├── components
 ├── animations
 └── assets
```

and let users select individual modules.

That would turn UX-SHUFFLE from a project distributor into a modular UI distribution system.

---

# Planned Commands

The intended CLI can evolve toward commands such as:

```bash
ux-shuffle
```

Launch the interactive interface.

```bash
ux-shuffle list
```

List available collections.

```bash
ux-shuffle get Portfolio
```

Transfer a specific collection.

```bash
ux-shuffle get Portfolio Meta
```

Transfer multiple collections.

```bash
ux-shuffle get Portfolio --target ../my-project
```

Transfer directly to a specified target.

```bash
ux-shuffle setup
```

Launch the full interactive setup workflow.

---

# Workflow Demonstration

A complete workflow could eventually look like:

```bash
git clone https://github.com/SakaethRam/UX-SHUFFLE.git

cd UX-SHUFFLE

npm install

npm run setup
```

Then:

```text
                 U X - S H U F F L E

        DESIGN SYSTEM DISTRIBUTION ENGINE


SCANNING REPOSITORY
████████████████████████████████████████ 100%


5 PROJECTS DETECTED


UX-SHUFFLE / SELECT

◉ Arkin-MetaLib
◯ Arkin-X-Production
◉ CAROUSEL-UX
◯ Meta
◉ Portfolio


3 PROJECTS SELECTED


TARGET

> ../my-project


TRANSFER ENGINE

Arkin-MetaLib      ━━━━━━━━━━━━━━━━━━━━ ✓
CAROUSEL-UX       ━━━━━━━━━━━━━━━━━━━━ ✓
Portfolio         ━━━━━━━━━━━━━━━━━━━━ ✓


────────────────────────────────────────

             SHUFFLE COMPLETE

          3 PROJECTS • 247 FILES

             ../my-project

       Your interface has been shuffled.

────────────────────────────────────────
```

---

# Design Philosophy

UX-SHUFFLE follows a few principles.

### 01 : Selection over extraction

The user should not need to copy an entire repository just to obtain one interface.

### 02 : Reuse over recreation

Previously built interface work should be easy to bring into a new project.

### 03 : Distribution over duplication

The repository acts as a source of reusable interface systems.

### 04 : CLI over ceremony

The workflow should remain fast enough to use from a terminal.

### 05 : Visual feedback

Operations should communicate what is actually happening.

### 06 : Non-destructive by default

The source collection should remain untouched after distribution.

---

# Directory Philosophy

UX-SHUFFLE intentionally keeps its distribution model simple.

```text
UX-SHUFFLE/
│
├── PROJECT-A/
├── PROJECT-B/
├── PROJECT-C/
├── PROJECT-D/
│
├── LICENSE
└── README.md
```

There is no requirement for every project to follow the same internal technology stack.

One collection may be React.

Another may be HTML/CSS.

Another may contain design experiments.

Another may contain an entire application interface.

The distribution boundary is the project directory.

---

# Extensibility

UX-SHUFFLE can eventually support:

* project metadata
* tags
* categories
* framework detection
* dependency detection
* module-level selection
* dry-run mode
* overwrite confirmation
* conflict resolution
* installation manifests
* project previews
* file-level selection
* configuration files
* remote collections
* versioned UI packages
* update/synchronization workflows

For example:

```text
UX-SHUFFLE

Portfolio
  React
  Landing
  Animation

CAROUSEL-UX
  React
  Interaction
  Components

Meta
  Dashboard
  SaaS
  Components
```

The CLI could then filter collections by capability instead of requiring users to remember directory names.

---

# Non-Destructive Philosophy

UX-SHUFFLE should never unexpectedly destroy the source collection.

The intended relationship is:

```text
                 MASTER COLLECTION
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       PROJECT A    PROJECT B    PROJECT C
          │            │            │
          └────────────┼────────────┘
                       ▼
                  LOCAL PROJECT
```

The source remains the canonical collection.

The target receives a copy.

---

# Roadmap

## Phase 1 — Repository Distribution

* [x] Collection repository
* [x] Project directories
* [ ] Interactive project selector
* [ ] Target directory selection
* [ ] File transfer
* [ ] Transfer statistics
* [ ] Animated CLI

## Phase 2 — CLI

* [ ] `ux-shuffle`
* [ ] `ux-shuffle list`
* [ ] `ux-shuffle get`
* [ ] `ux-shuffle setup`
* [ ] CLI package distribution
* [ ] `npx ux-shuffle`

## Phase 3 — Intelligent Distribution

* [ ] Framework detection
* [ ] Project metadata
* [ ] Module discovery
* [ ] Dependency awareness
* [ ] Conflict detection
* [ ] Dry-run mode

## Phase 4 — UI Distribution System

* [ ] Component-level selection
* [ ] Asset-level selection
* [ ] Design-system manifests
* [ ] Versioned collections
* [ ] Remote collection support
* [ ] Update/synchronization workflow

---

# Contributing

Contributions are welcome.

To add a new UI/UX collection:

### 1. Create a directory

```text
UX-SHUFFLE/
└── Your-Project/
```

### 2. Add your interface work

Keep the project self-contained where practical.

### 3. Commit your changes

```bash
git add .
git commit -m "Add Your-Project collection"
```

### 4. Push

```bash
git push
```

Once added, the project can be discovered by the CLI's repository scanner.

---

## License & contribution

It is distributed under the terms defined in `LICENSE`.
