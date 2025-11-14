export default function ActivityItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-[rgba(15,23,42,0.52)] shadow">
        {Icon && <Icon className="h-4 w-4" />}
      </div>
      <div className="flex-1 border-b border-black/5 dark:border-white/10 py-3 text-sm">{text}</div>
    </div>
  );
}