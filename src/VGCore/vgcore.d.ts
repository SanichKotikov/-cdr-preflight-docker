// Type definitions for VGCore (CorelDRAW)
// Definitions by: Sanich Kotikov <https://github.com/SanichKotikov>

import {
  cdrAlignment,
  cdrColorType,
  cdrFontLine,
  cdrReferencePoint,
  cdrShapeType,
  cdrTextCharSet,
  cdrTextLanguage,
  cdrTextType,
  cdrTreeNodeType,
  cdrTriState,
  cdrUnit,
  fileBoxType,
} from './enums';

declare global {
  interface External {
    Application: VGCore.Application;
    RegisterEventListener(EventName: string, Callback: string): void;
    UnregisterEventListener(EventName: string): void;
  }

  namespace VGCore {
    interface Application {
      readonly ActiveDocument: Document;
      readonly ActiveLayer: Layer;
      readonly ActivePage: Page;
      readonly ActiveSelectionRange: ShapeRange;
      readonly AddonPath: string;
      readonly Documents: Documents;
      readonly FontList: FontList;
      readonly GMSManager: GMSManager;
      EventsEnabled: boolean;
      Optimization: boolean;
      readonly UILanguage: cdrTextLanguage;
      readonly VersionBuild: number;
      readonly VersionMajor: number;
      readonly VersionMinor: number;
      CorelScriptTools(): CorelScriptTools;
      CreateDocument(): Document;
      Refresh(): void;
    }

    interface Color {
      readonly IsCMYK: boolean;
      readonly IsWhite: boolean;
      readonly Type: cdrColorType;
      CMYKAssign(Cyan: number, Magenta: number, Yellow: number, Black: number): void;
      ToString(): string;
    }

    interface CorelScriptTools {
      GetFileBox(): string;
      GetFileBox(Filter: string): string;
      GetFileBox(Filter: string, Title: string): string;
      GetFileBox(Filter: string, Title: string, Type: fileBoxType): string;
      GetFileBox(Filter: string, Title: string, Type: fileBoxType, File: string): string;
      GetFileBox(Filter: string, Title: string, Type: fileBoxType, File: string, Extension: string): string;
      GetFileBox(
        Filter: string,
        Title: string,
        Type: fileBoxType,
        File: string,
        Extension: string,
        Folder: string,
      ): string;
      GetFileBox(
        Filter: string,
        Title: string,
        Type: fileBoxType,
        File: string,
        Extension: string,
        Folder: string,
        Button: string,
      ): string;
    }

    interface Document {
      readonly ActiveLayer: Layer;
      readonly FullFileName: string;
      readonly MasterPage: Page;
      readonly Metadata: Metadata;
      readonly Pages: Pages;
      PreserveSelection: boolean;
      ReferencePoint: cdrReferencePoint;
      readonly Rulers: Rulers;
      readonly Title: string;
      readonly TreeRoot: TreeNode;
      Unit: cdrUnit;
      Activate(): void;
      AddPages(NumberOfPages: number): Page;
      AddToSelection(...ShapeArray: Shape[]): void;
      ClearSelection(): void;
      CreateFill(): Fill;
      CreateFill(FillString: string): Fill;
      CreateOutline(): Outline;
      CreateOutline(OutlineString: string): Outline;
      Duplicate(): Document;
      RestoreSettings(): void;
      RestoreSettings(Tag: string): void;
      SaveSettings(): void;
      SaveSettings(Tag: string): void;
      Undo(): void;
      Undo(Levels: number): void;
    }

    interface Documents {
      readonly Count: number;
      Item(Index: number): Document;
    }

    interface Fill {
      UniformColor: Color;
      CopyAssign(SourceFill: Fill): void;
    }

    interface FontList {
      readonly Count: number;
      Item(Index: number): string;
    }

    interface GMSManager {
      readonly GMSPath: string;
      readonly Projects: GMSProjects;
      readonly UserGMSPath: string;
      RunMacro(ModuleName: string, MacroName: string, ...Parameters: any[]): any;
    }

    interface GMSProject {

    }

    interface GMSProjects {
      readonly Count: number;
      Load(FileName: string): GMSProject;
      Load(FileName: string, CopyFile: boolean): GMSProject;
      Load(FileName: string, CopyFile: boolean, ForAllUsers: boolean): GMSProject;
    }

    interface Layer {
      readonly IsSpecialLayer: boolean;
      Activate(): void;
      CreateArtisticText(Left: number, Bottom: number, Text: string): Shape;
      CreateArtisticText(Left: number, Bottom: number, Text: string, LanguageID: cdrTextLanguage): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
        Size: number,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
        Size: number,
        Bold: cdrTriState,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
        Size: number,
        Bold: cdrTriState,
        Italic: cdrTriState,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
        Size: number,
        Bold: cdrTriState,
        Italic: cdrTriState,
        Underline: cdrFontLine,
      ): Shape;
      CreateArtisticText(
        Left: number,
        Bottom: number,
        Text: string,
        LanguageID: cdrTextLanguage,
        CharSet: cdrTextCharSet,
        Font: string,
        Size: number,
        Bold: cdrTriState,
        Italic: cdrTriState,
        Underline: cdrFontLine,
        Alignment: cdrAlignment,
      ): Shape;
      Delete(): void;
    }

    interface Layers {
      readonly Count: number;
      Item(IndexOrName: number | string): Layer;
    }

    interface Metadata {
      DocID: string;
    }

    interface Outline {
      CopyAssign(SourceOutline: Outline): void;
    }

    interface Page {
      readonly ActiveLayer: Layer;
      readonly Layers: Layers;
      readonly Shapes: Shapes;
      SizeHeight: number;
      SizeWidth: number;
      Activate(): void;
      CreateLayer(LayerName: string): Layer;
      FindShape(Name: string): Shape;
      FindShape(Name: string, Type: cdrShapeType): Shape;
      FindShape(Name: string, Type: cdrShapeType, StaticID: number): Shape;
      FindShape(Name: string, Type: cdrShapeType, StaticID: number, Recursive: boolean): Shape;
      //GetSize(Width: number, Height: number): void;
      Delete(): void;
    }

    interface Pages {
      readonly Count: number;
      readonly First: Page;
      readonly Last: Page;
      Item(Index: number): Page;
    }

    interface PowerClip {
      readonly Shapes: Shapes;
    }

    interface Rulers {
      HUnits: cdrUnit;
    }

    interface Shape {
      CenterX: number;
      CenterY: number;
      Fill: Fill;
      LeftX: number;
      Locked: boolean;
      Name: string;
      PositionX: number;
      PositionY: number;
      readonly PowerClip: PowerClip;
      readonly Outline: Outline;
      RightX: number;
      RotationAngle: number;
      readonly Shapes: Shapes;
      SizeHeight: number;
      SizeWidth: number;
      readonly StaticID: number;
      readonly Text: Text;
      readonly TreeNode: TreeNode;
      readonly Type: cdrShapeType;
      Delete(): void;
      Rotate(Angle: number): void;
      SetPosition(PositionX: number, PositionY: number): void;
      SetSize(Width: number): void;
      SetSize(Width: number, Height: number): void;
    }

    interface ShapeRange {
      CenterX: number;
      CenterY: number;
      readonly Count: number;
      readonly FirstShape: Shape;
      readonly LastShape: Shape;
      readonly ReverseRange: ShapeRange;
      SizeHeight: number;
      SizeWidth: number;
      Item(IndexOrName: number | string): Shape;
      MoveToLayer(Layer: Layer): void;
      SetBoundingBox(x: number, y: number, Width: number, Height: number): void;
      SetBoundingBox(x: number, y: number, Width: number, Height: number, KeepAspect: boolean): void;
      SetBoundingBox(
        x: number,
        y: number,
        Width: number,
        Height: number,
        KeepAspect: boolean,
        ReferencePoint: cdrReferencePoint
      ): void;
      SetPosition(PositionX: number, PositionY: number): void;
      SetSize(Width: number): void;
      SetSize(Width: number, Height: number): void;
      // SetSizeEx(CenterX: number, CenterY: number): void;
      // SetSizeEx(CenterX: number, CenterY: number, Width: number): void;
      // SetSizeEx(CenterX: number, CenterY: number, Width: number, Height: number): void;
      Sort(CompareExpression: string): void;
      Sort(CompareExpression: string, StartIndex: number): void;
      Sort(CompareExpression: string, StartIndex: number, EndIndex: number): void;
      Sort(CompareExpression: string, StartIndex: number, EndIndex: number, Data: any): void;
    }

    interface Shapes {
      readonly Count: number;
      Item(IndexOrName: number | string): Shape;
      All(): ShapeRange;
    }

    interface Text {
      readonly Story: TextRange;
      readonly Type: cdrTextType;
    }

    interface TextRange {
      Alignment: cdrAlignment;
      Bold: boolean;
      CharSpacing: number;
      Font: string;
      Italic: boolean;
      Size: number;
    }

    interface TreeNode {
      readonly Children: TreeNodes;
      readonly Layer: Layer;
      Name: string;
      readonly Page: Page;
      readonly Shape: Shape;
      readonly ShapeType: cdrShapeType;
      readonly Type: cdrTreeNodeType;
    }

    interface TreeNodes {
      readonly Count: number;
      Item(Index: number): TreeNode;
    }
  }
}
