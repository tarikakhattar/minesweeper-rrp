"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hydrationPlugin = require("@tinyslice/hydration-plugin");
const rxjs = require("rxjs");
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
const documentPointerDownSubject$ = new rxjs.Subject();
const documentPointerUpSubject$ = new rxjs.Subject();
const documentPointerMoveSubject$ = new rxjs.Subject();
const documentMouseLeaveSubject$ = new rxjs.Subject();
const documentContextMenuSubject$ = new rxjs.Subject();
const documentPointerDown$ = documentPointerDownSubject$.asObservable();
const documentPointerMove$ = documentPointerMoveSubject$.asObservable();
const documentPointerUp$ = documentPointerUpSubject$.asObservable();
const documentMouseLeave$ = documentMouseLeaveSubject$.asObservable();
const documentContextMenu$ = documentPointerDownSubject$.asObservable();
const initializeStoreBrowserFeatures = (slice) => {
  rxjs.scheduled(rxjs.fromEvent(document, "pointerdown"), rxjs.asyncScheduler).pipe(rxjs.tap(documentPointerDownSubject$)).subscribe();
  rxjs.scheduled(rxjs.fromEvent(document, "pointerup"), rxjs.asyncScheduler).pipe(rxjs.tap(documentPointerUpSubject$)).subscribe();
  rxjs.scheduled(rxjs.fromEvent(document, "pointermove"), rxjs.asyncScheduler).pipe(rxjs.tap(documentPointerMoveSubject$)).subscribe();
  rxjs.scheduled(rxjs.fromEvent(document, "mouseleave"), rxjs.asyncScheduler).pipe(rxjs.tap(documentMouseLeaveSubject$)).subscribe();
  rxjs.scheduled(rxjs.fromEvent(document, "contextmenu"), rxjs.asyncScheduler).pipe(rxjs.tap(documentContextMenuSubject$)).subscribe();
  const plugins = [
    new hydrationPlugin.TinySliceHydrationPlugin(PACKAGE_NAME_AND_VERSION)
  ];
  slice.setPlugins(plugins);
  slice.createEffect(
    slice.internals.debug$.pipe(
      rxjs.mergeMap((debug) => {
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
          return rxjs.of();
        }
      })
    )
  );
  return slice;
};
exports.BROWSER_TAG = BROWSER_TAG;
exports.PACKAGE_NAME_AND_VERSION = PACKAGE_NAME_AND_VERSION;
exports.documentContextMenu$ = documentContextMenu$;
exports.documentMouseLeave$ = documentMouseLeave$;
exports.documentPointerDown$ = documentPointerDown$;
exports.documentPointerMove$ = documentPointerMove$;
exports.documentPointerUp$ = documentPointerUp$;
exports.initializeStoreBrowserFeatures = initializeStoreBrowserFeatures;
exports.packageMetadata = packageMetadata;
