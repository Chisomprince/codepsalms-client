import Card from "./Card";
import Socials from "./Socials";

export default function SocialsCard() {
  return (
    <div className=" bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <Card p={4}>
        <p className="text-xl mb-4">Social Handles</p>
        <p className="mb-4">Follow us on your favourite social platform</p>
        <Socials />
      </Card>
    </div>
  );
}
