import { access, mkdir, rename } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(projectRoot, "out", "free-100-coloring-pages.html");
const target = resolve(
  projectRoot,
  "out",
  "free-100-coloring-pages",
  "index.html",
);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(source))) {
    console.error(
      `[free-coloring-pages] Missing required build output: ${source}`,
    );
    process.exit(1);
  }

  await mkdir(dirname(target), { recursive: true });
  await rename(source, target);

  if (await exists(source)) {
    console.error(
      `[free-coloring-pages] Source still exists after move: ${source}`,
    );
    process.exit(1);
  }

  if (!(await exists(target))) {
    console.error(
      `[free-coloring-pages] Target was not created after move: ${target}`,
    );
    process.exit(1);
  }

  console.log(
    `[free-coloring-pages] Moved ${source} to ${target}`,
  );
}

main().catch((error) => {
  console.error("[free-coloring-pages] Failed to create index output:", error);
  process.exit(1);
});
