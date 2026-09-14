#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import chalk from "chalk";
import gradient from "gradient-string";
import ora from "ora";

import {
  intro,
  outro,
  multiselect,
  text,
  confirm,
  isCancel
} from "@clack/prompts";

const ROOT = process.cwd();

const EXCLUDED = new Set([
  ".git",
  "node_modules",
  ".DS_Store",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock"
]);

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

function clear() {
  process.stdout.write("\x1Bc");
}

function center(text) {
  const width = process.stdout.columns || 80;
  const padding = Math.max(
    0,
    Math.floor((width - text.length) / 2)
  );

  return " ".repeat(padding) + text;
}

function logo() {
  const art = `
██╗   ██╗██╗  ██╗
██║   ██║╚██╗██╔╝
██║   ██║ ╚███╔╝
╚██╗ ██╔╝ ██╔██╗
 ╚████╔╝ ██╔╝ ██╗
  ╚═══╝  ╚═╝  ╚═╝

        U X - S H U F F L E
`;

  console.log(
    gradient.atlas.rgb(
      chalk.bold(art)
    )
  );

  console.log(
    center(
      chalk.gray(
        "DESIGN SYSTEM DISTRIBUTION ENGINE"
      )
    )
  );

  console.log();
}

async function scanProjects() {
  const entries = await fs.readdir(ROOT, {
    withFileTypes: true
  });

  return entries
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !EXCLUDED.has(entry.name)
    )
    .map((entry) => entry.name)
    .sort();
}

async function countFiles(dir) {
  let total = 0;

  async function walk(current) {
    const entries = await fs.readdir(current, {
      withFileTypes: true
    });

    for (const entry of entries) {
      if (EXCLUDED.has(entry.name)) continue;

      const full = path.join(current, entry.name);

      if (entry.isDirectory()) {
        await walk(full);
      } else {
        total++;
      }
    }
  }

  await walk(dir);

  return total;
}

async function scanAnimation(projects) {
  const spinner = ora({
    text: "INITIALIZING UX-SHUFFLE",
    spinner: "dots"
  }).start();

  await sleep(500);

  spinner.text = "SCANNING REPOSITORY";
  await sleep(500);

  spinner.text = "INDEXING DESIGN MODULES";
  await sleep(500);

  spinner.text = "MAPPING FILE STRUCTURE";
  await sleep(500);

  spinner.text = `${projects.length} PROJECTS DETECTED`;
  await sleep(700);

  spinner.succeed(
    chalk.bold(
      `${projects.length} PROJECTS DETECTED`
    )
  );
}

async function showProjects(projects) {
  console.log();

  for (const project of projects) {
    process.stdout.write(
      chalk.gray("  ◦ ")
    );

    await sleep(70);

    console.log(
      chalk.white.bold(project)
    );
  }

  console.log();
}

async function selectProjects(projects) {
  const selected = await multiselect({
    message: "SELECT PROJECTS TO SHUFFLE",
    options: projects.map((project) => ({
      value: project,
      label: project
    })),
    required: true
  });

  if (isCancel(selected)) {
    process.exit(0);
  }

  return selected;
}

async function getTarget() {
  const target = await text({
    message: "TARGET DIRECTORY",
    placeholder: "../my-project",
    defaultValue: "../my-project",
    validate(value) {
      if (!value?.trim()) {
        return "Target directory is required.";
      }
    }
  });

  if (isCancel(target)) {
    process.exit(0);
  }

  return path.resolve(ROOT, target);
}

async function transfer(projects, target) {
  console.log();

  console.log(
    chalk.bold("SOURCE")
  );

  console.log(
    chalk.gray(`  ${ROOT}`)
  );

  console.log();

  console.log(
    chalk.gray("                    ↓")
  );

  console.log();

  console.log(
    chalk.bold("              UX-SHUFFLE")
  );

  console.log(
    chalk.gray("                 ENGINE")
  );

  console.log();

  console.log(
    chalk.gray("                    ↓")
  );

  console.log();

  console.log(
    chalk.bold("TARGET")
  );

  console.log(
    chalk.gray(`  ${target}`)
  );

  console.log();

  await fs.mkdir(target, {
    recursive: true
  });

  let totalFiles = 0;

  for (const project of projects) {
    const source = path.join(ROOT, project);
    const destination = path.join(
      target,
      project
    );

    const fileCount = await countFiles(source);

    const spinner = ora({
      text: `SHUFFLING ${project}`,
      spinner: "arc"
    }).start();

    await sleep(250);

    await fs.cp(source, destination, {
      recursive: true,
      force: true
    });

    totalFiles += fileCount;

    spinner.succeed(
      `${project}  ${chalk.gray(
        `${fileCount} files`
      )}`
    );
  }

  return totalFiles;
}

async function main() {
  clear();

  logo();

  await sleep(700);

  const projects = await scanProjects();

  if (!projects.length) {
    console.log(
      chalk.red(
        "No distributable projects found."
      )
    );

    process.exit(1);
  }

  await scanAnimation(projects);

  console.log();

  await showProjects(projects);

  const selected = await selectProjects(
    projects
  );

  console.log();

  const target = await getTarget();

  console.log();

  const proceed = await confirm({
    message:
      `Shuffle ${selected.length} project(s) into ${target}?`
  });

  if (isCancel(proceed) || !proceed) {
    outro(
      chalk.gray(
        "Shuffle cancelled."
      )
    );

    process.exit(0);
  }

  clear();

  logo();

  console.log(
    chalk.gray(
      "TRANSFER ENGINE"
    )
  );

  console.log();

  const totalFiles = await transfer(
    selected,
    target
  );

  console.log();

  console.log(
    chalk.bold(
      "────────────────────────────────────────"
    )
  );

  console.log();

  console.log(
    center(
      chalk.bold(
        "SHUFFLE COMPLETE"
      )
    )
  );

  console.log();

  console.log(
    center(
      chalk.white(
        `${selected.length} PROJECTS  •  ${totalFiles} FILES`
      )
    )
  );

  console.log();

  console.log(
    center(
      chalk.gray(target)
    )
  );

  console.log();

  console.log(
    center(
      chalk.bold(
        "Your interface has been shuffled."
      )
    )
  );

  console.log();

  outro(
    chalk.gray(
      "UX-SHUFFLE"
    )
  );
}

main().catch((error) => {
  console.error();
  console.error(
    chalk.red.bold("UX-SHUFFLE ERROR")
  );
  console.error(
    chalk.red(error.message)
  );
  process.exit(1);
});