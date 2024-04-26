import { NodePath } from "@babel/core";
import t, { FunctionDeclaration, ArrowFunctionExpression, FunctionExpression } from '@babel/types';
export declare const shouldIgnore: (path: NodePath) => t.Comment | undefined;
export declare const isTopFunction: (path: NodePath) => boolean;
export declare const getTopFunctionPath: (path: NodePath) => NodePath<t.Node> | undefined;
export declare const isInFunction: (path: NodePath) => NodePath<t.Node> | null;
export declare const getTopPath: (path: NodePath) => NodePath<t.Program>;
export declare const getAllImport: (path: NodePath) => t.ImportDeclaration[];
export declare const hasImport: (ast: any, source: string) => boolean;
export declare const hasImported_TFuncOfI18next: (path: NodePath) => boolean;
export declare const checkAndImport_TFuncOfI18next: (path: NodePath) => void;
export declare const check_insertImport_withoutHook: (path: NodePath) => void;
export declare type TFunctionType = ArrowFunctionExpression | FunctionExpression | FunctionDeclaration;
export declare const getExposeHookNode: () => t.VariableDeclaration;
export declare const check_insertExposeHook: (path: NodePath) => void;
export declare const hasInsert_ExposeHook: (path: NodePath) => boolean | t.Statement | undefined;
export declare const isReactFuncComp: (path: NodePath) => boolean | "" | undefined;
export declare const isCustomReactHookFunc: (path: NodePath) => boolean | "" | undefined;
export declare const isFunction: (path: NodePath) => boolean;
export declare const getKey: (keyMap: Record<string, string>, chinesesStr: string) => string | undefined;
export declare const writeFileIfNotExists: (directoryPath: string, fileName: string, content: string) => void;
