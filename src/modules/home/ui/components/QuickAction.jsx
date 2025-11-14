import { Button } from "@/components/ui/button";

export default function QuickAction({ icon: Icon, label, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow transition hover:-translate-y-1"
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
    </Button>
  );
}