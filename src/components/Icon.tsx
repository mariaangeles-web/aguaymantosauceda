import {
  Award,
  Boxes,
  ChefHat,
  ClipboardList,
  Handshake,
  Headset,
  Leaf,
  Lightbulb,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  Target,
  Telescope,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Award,
  Boxes,
  ChefHat,
  ClipboardList,
  Handshake,
  Headset,
  Leaf,
  Lightbulb,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  Target,
  Telescope,
  Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp className={className} aria-hidden="true" />;
}
