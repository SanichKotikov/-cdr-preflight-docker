import { VGCore, cdrTreeNodeType } from 'vgcore';

export const loop = (
  root: VGCore.TreeNode,
  modules: any[],
  update: (output: { [key: string]: number[] }) => void
) => {
  const nodes: VGCore.TreeNode[] = [root];

  const next = () => {
    setTimeout(() => {
      const node = nodes.pop();
      const count = node.Children.Count;

      for (let i = 1; i <= count; i++) {
        nodes.push(node.Children.Item(i));
      }

      if (node.Type === cdrTreeNodeType.cdrShapeNode) {
        const powerClip = node.Shape.PowerClip;

        if (!!powerClip) {
          const count = powerClip.Shapes.Count;
          for (let i = 1; i <= count; i++) {
            nodes.push(powerClip.Shapes.Item(i).TreeNode);
          }
        }

        modules.forEach(module => {
          module.check(node.Shape);
          update(module.output());
        });
      }

      if (nodes.length) next();
    }, 10);
  };

  next();
};
