import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { keyframes, styled } from "../../../stitches.config";

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {});

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(CollapsiblePrimitive.Content, {
  overflow: "hidden",
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});

const Collapsible = Object.assign(CollapsiblePrimitive.Root, {
  Trigger: CollapsiblePrimitive.Trigger,
  Content: StyledContent,
});

export default Collapsible;
