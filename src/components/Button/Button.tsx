import {IconLogin} from "../icons/IconLogin";
import {Button} from "../ui/button";

export function ButtonWithIcon() {
  return (
    <Button variant="default" size="lg" className="gap-2">
      <IconLogin className="size-5" />
      ورود/ثبت نام
    </Button>
  );
}
