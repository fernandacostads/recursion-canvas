export interface Props {
  config: any;
  setConfig: (c: any) => void;
  presets: Record<string, any>;
  onReset: () => void;
  onPause: () => void;
  onClear: () => void;
  onSave: () => void;
  onRegenerate: () => void;
}
