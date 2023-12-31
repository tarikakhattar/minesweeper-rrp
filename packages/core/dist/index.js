import { TinySliceHydrationPlugin } from "@tinyslice/hydration-plugin";
import { Subject, scheduled, fromEvent, asyncScheduler, tap, mergeMap, of } from "rxjs";
const name = "@w2k/workspace";
const description = "A classic desktop experience powered by Svelte and TinySlice";
const version = "4.1.0";
const license = "mit";
const keywords = [
  "actions",
  "cqrs",
  "effects",
  "javascript",
  "js",
  "managed-by-autotool",
  "minesweeper",
  "reactive",
  "rxjs",
  "tinyslice",
  "ts",
  "typescript"
];
const author = {
  email: "alexaegis@gmail.com",
  name: "Alex Aegis",
  url: "https://github.com/AlexAegis"
};
const homepage = "https://github.com/AlexAegis/minesweeper";
const repository = {
  url: "https://github.com/AlexAegis/minesweeper",
  type: "git"
};
const bugs = {
  email: "alexaegis@gmail.com",
  url: "https://github.com/AlexAegis/minesweeper/issues"
};
const type = "module";
const config = {
  "engine-strict": true
};
const engines = {
  node: ">=18.10.0",
  pnpm: ">=8.0.0"
};
const packageManager = "pnpm@8.10.4";
const workspaces = [
  "apps/*",
  "fixtures/*",
  "libs/*",
  "packages/*"
];
const scripts = {
  lint: "turbo run lint_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:depcheck": "turbo run lint:depcheck_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:depcheck_": "depcheck",
  "lint:es": "turbo run lint:es_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:format": "turbo run lint:format_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:format_": "prettier --cache-location .cache/prettier --plugin prettier-plugin-svelte --plugin prettier-plugin-tailwindcss --ignore-path .config/workspace-only.prettierignore --check .",
  "lint:md": "turbo run lint:md_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:md_": "remark --frail --no-stdout --silently-ignore --ignore-pattern packages --ignore-pattern libs --ignore-pattern apps .",
  "lint:rmd": "turbo run lint:rmd",
  "lint:style": "turbo run lint:style_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:style:css": "turbo run lint:style:css_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:style:html": "turbo run lint:style:html_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:style:scss": "turbo run lint:style:scss_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:svelte": "turbo run lint:svelte_ --concurrency 16 --cache-dir .cache/turbo",
  "lint:tsc": "turbo run lint:tsc_ --concurrency 16 --cache-dir .cache/turbo",
  publint: "BUILD_REASON='publish' turbo run publint_ --concurrency 16 --cache-dir .cache/turbo",
  test: "turbo run test_ --concurrency 16 --cache-dir .cache/turbo && merge-workspace-lcov-reports && lcov-viewer lcov -o ./coverage ./coverage/lcov.info",
  all: "BUILD_REASON='publish' turbo run all_ --concurrency 16 --cache-dir .cache/turbo",
  build: "turbo run build-lib_ build-app_ --concurrency 16 --cache-dir .cache/turbo",
  "build-app": "turbo run build-app_ --concurrency 16 --cache-dir .cache/turbo",
  "build-lib": "turbo run build-lib_ --concurrency 16 --cache-dir .cache/turbo",
  ce: "turbo run ce_ --concurrency 6 --cache-dir .cache/turbo",
  dev: "pnpm run --dir apps/desktop dev",
  format: "turbo run format_ --concurrency 16 --cache-dir .cache/turbo",
  format_: "prettier --cache-location .cache/prettier --plugin prettier-plugin-svelte --plugin prettier-plugin-tailwindcss --ignore-path .config/workspace-only.prettierignore --write .",
  ncu: "ncu --configFilePath ./.config/ && pnpm up",
  nuke: "nuke",
  postinstall: "husky install && autotool",
  release: "commit-and-tag-version --sign --commit-all",
  "release:major": "commit-and-tag-version --sign --commit-all --release-as major",
  "release:minor": "commit-and-tag-version --sign --commit-all --release-as minor",
  "release:patch": "commit-and-tag-version --sign --commit-all --release-as patch",
  start: "pnpm run --dir apps/desktop start",
  typedoc: "turbo run typedoc_ --concurrency 16 --cache-dir .cache/turbo",
  typedoc_: "typedoc"
};
const devDependencies = {
  "@alexaegis/autotool-plugin-commitlint": "^0.8.4",
  "@alexaegis/autotool-plugin-depcheck": "^0.8.4",
  "@alexaegis/autotool-plugin-editorconfig": "^0.8.4",
  "@alexaegis/autotool-plugin-eslint": "^0.8.4",
  "@alexaegis/autotool-plugin-git": "^0.8.4",
  "@alexaegis/autotool-plugin-github": "^0.8.4",
  "@alexaegis/autotool-plugin-husky": "^0.8.4",
  "@alexaegis/autotool-plugin-ncu": "^0.8.4",
  "@alexaegis/autotool-plugin-prettier": "^0.8.4",
  "@alexaegis/autotool-plugin-publint": "^0.8.4",
  "@alexaegis/autotool-plugin-remark": "^0.8.4",
  "@alexaegis/autotool-plugin-standard-version": "^0.8.4",
  "@alexaegis/autotool-plugin-stylelint": "^0.8.4",
  "@alexaegis/autotool-plugin-svelte": "^0.8.4",
  "@alexaegis/autotool-plugin-ts": "^0.8.4",
  "@alexaegis/autotool-plugin-turbo": "^0.8.4",
  "@alexaegis/autotool-plugin-typedoc": "^0.8.4",
  "@alexaegis/autotool-plugin-vite": "^0.8.4",
  "@alexaegis/autotool-plugin-vitest": "^0.8.4",
  "@alexaegis/autotool-plugin-vscode": "^0.8.4",
  "@alexaegis/autotool-plugin-workspace": "^0.8.4",
  "@alexaegis/coverage-tools": "^0.7.3",
  "@alexaegis/eslint-config-core": "^0.8.4",
  "@alexaegis/nuke": "^0.8.4",
  "@alexaegis/stylelint-config": "^0.8.4",
  "@alexaegis/ts": "^0.8.4",
  "@lcov-viewer/cli": "^1.3.0",
  "@types/eslint": "^8.44.7",
  "@vitest/coverage-v8": "^0.34.6",
  autotool: "^0.3.0",
  "commit-and-tag-version": "^12.0.0",
  commitlint: "^18.4.2",
  depcheck: "^1.4.7",
  eslint: "^8.54.0",
  husky: "^8.0.3",
  "lint-staged": "^15.1.0",
  "npm-check-updates": "^16.14.11",
  prettier: "^3.1.0",
  "prettier-plugin-svelte": "^3.1.0",
  "prettier-plugin-tailwindcss": "^0.5.7",
  remark: "^15.0.1",
  "remark-cli": "^12.0.0",
  stylelint: "^15.11.0",
  "svelte-check": "^3.6.0",
  "ts-node": "^10.9.1",
  turbo: "^1.10.16",
  "turbo-ignore": "^1.10.16",
  turbowatch: "^2.29.4",
  typedoc: "^0.25.3",
  typescript: "^5.2.2"
};
const packageJson = {
  name,
  description,
  version,
  license,
  "private": true,
  keywords,
  author,
  homepage,
  repository,
  bugs,
  type,
  config,
  engines,
  packageManager,
  workspaces,
  scripts,
  devDependencies
};
const BROWSER_TAG = "[browser]";
const packageMetadata = packageJson;
const PACKAGE_NAME_AND_VERSION = `${packageMetadata.name} (${packageMetadata.version})`;
const documentPointerDownSubject$ = new Subject();
const documentPointerUpSubject$ = new Subject();
const documentPointerMoveSubject$ = new Subject();
const documentMouseLeaveSubject$ = new Subject();
const documentContextMenuSubject$ = new Subject();
const documentPointerDown$ = documentPointerDownSubject$.asObservable();
const documentPointerMove$ = documentPointerMoveSubject$.asObservable();
const documentPointerUp$ = documentPointerUpSubject$.asObservable();
const documentMouseLeave$ = documentMouseLeaveSubject$.asObservable();
const documentContextMenu$ = documentPointerDownSubject$.asObservable();
const initializeStoreBrowserFeatures = (slice) => {
  scheduled(fromEvent(document, "pointerdown"), asyncScheduler).pipe(tap(documentPointerDownSubject$)).subscribe();
  scheduled(fromEvent(document, "pointerup"), asyncScheduler).pipe(tap(documentPointerUpSubject$)).subscribe();
  scheduled(fromEvent(document, "pointermove"), asyncScheduler).pipe(tap(documentPointerMoveSubject$)).subscribe();
  scheduled(fromEvent(document, "mouseleave"), asyncScheduler).pipe(tap(documentMouseLeaveSubject$)).subscribe();
  scheduled(fromEvent(document, "contextmenu"), asyncScheduler).pipe(tap(documentContextMenuSubject$)).subscribe();
  const plugins = [
    new TinySliceHydrationPlugin(PACKAGE_NAME_AND_VERSION)
  ];
  slice.setPlugins(plugins);
  slice.createEffect(
    slice.internals.debug$.pipe(
      mergeMap((debug) => {
        if (debug) {
          return slice.loadAndSetPlugins(
            () => import("@tinyslice/devtools-plugin").then(
              (plugin) => new plugin.TinySliceDevtoolPlugin({
                name: PACKAGE_NAME_AND_VERSION
              })
            ),
            () => import("@tinyslice/logger-plugin").then(
              (plugin) => new plugin.TinySliceLoggerPlugin({
                onlyTimers: true,
                disableGrouping: false,
                ignoreActions: [/.*timer.*/, /.*move.*/, /.*resize.*/]
              })
            )
          );
        } else {
          slice.setPlugins(plugins);
          return of();
        }
      })
    )
  );
  return slice;
};
export {
  BROWSER_TAG,
  PACKAGE_NAME_AND_VERSION,
  documentContextMenu$,
  documentMouseLeave$,
  documentPointerDown$,
  documentPointerMove$,
  documentPointerUp$,
  initializeStoreBrowserFeatures,
  packageMetadata
};
