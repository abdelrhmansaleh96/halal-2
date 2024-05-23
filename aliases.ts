import path from "path";
const aliases = {
  "@": path.resolve(__dirname, "./src"),
  "@appImg": path.resolve(__dirname, "./src/assets/img"),
  "@appSharedComponents": path.resolve(__dirname, "./src/shared/components"),
  "@appSharedServices": path.resolve(__dirname, "./src/shared/services"),
  "@appSharedEnums": path.resolve(__dirname, "./src/shared/enums"),
  "@appSharedPages": path.resolve(__dirname, "./src/shared/pages"),
  "@appSharedModels": path.resolve(__dirname, "./src/shared/models"),
  "@appInit": path.resolve(__dirname, "./src/init"),
  "@appInitHooks": path.resolve(__dirname, "./src/init/hooks"),
  "@shadcnComponents": path.resolve(__dirname, "./src/shadcn/components"),
  "@shadcnUiComponents": path.resolve(__dirname, "./src/shadcn/components/ui"),
};

export default aliases;
