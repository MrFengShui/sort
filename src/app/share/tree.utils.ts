import { TreeNode } from "primeng/api";

import { PathParamModel } from "../models/tree.model";

/**
 *
 * @param tree
 * @param key
 * @returns
 */
export const findAllNodesByKey = (tree: TreeNode<PathParamModel<string>>[], key: string): TreeNode<PathParamModel<string>>[] => {
    const array: TreeNode<PathParamModel<string>>[] = [];
    let stack: TreeNode<PathParamModel<string>>[] | undefined = [], node: TreeNode<PathParamModel<string>> | undefined;

    for (let i = tree.length - 1; i > -1; i--)
        stack.push(tree[i]);

    while (stack.length > 0) {
        node = stack.pop();

        if (node && !node.children && node.key?.startsWith(key))
            array.push(node);

        if (node?.children)
            for (let i = node.children.length - 1; i > -1; i--)
                stack.push(node.children[i]);
    }

    stack = undefined;
    node = undefined;
    return array;
}

/**
 * 该方法用于计算给定节点数组所有叶节点的总个数
 * @param source 给定节点数组
 * @returns 叶结点总个数
 */
export const totalOfLeafNodes = (source: TreeNode<PathParamModel<string>> | TreeNode<PathParamModel<string>>[]): number => {
    let stack: TreeNode<PathParamModel<string>>[] | undefined = [];
    let node: TreeNode<PathParamModel<string>> | undefined, value: number = 0;

    stack = stack.concat(Array.isArray(source) ? source : (source.children || []));

    while (stack.length > 0) {
        node = stack.pop();

        if (node?.children)
            node.children.forEach(child => stack?.push(child));
        else
            value += 1;
    }

    stack = undefined;
    node = undefined;
    return value;
}
