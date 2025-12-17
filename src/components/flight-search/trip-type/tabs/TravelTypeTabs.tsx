import BankIcon from "@/components/icons/BankIcon";
import BusIcon from "@/components/icons/BusIcon";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
const triggerClass = `
  relative
  flex
  flex-col
  items-center
  gap-1
  text-xs
  text-muted-foreground
  cursor-pointer

  bg-transparent
  border-0
  shadow-none

  ring-0
  outline-none
  focus:outline-none
  focus-visible:outline-none
  focus-visible:ring-0

  data-[state=active]:bg-transparent
  data-[state=active]:shadow-none
  data-[state=active]:text-black

  after:absolute
  after:-bottom-6
  after:left-1/2
  after:h-[2px]
  after:w-6
  after:-translate-x-1/2
  after:rounded-full
  after:bg-black

  after:opacity-0
  after:scale-x-0
  after:transition-all
  after:duration-200
  after:ease-out
  after:origin-center

  data-[state=active]:after:opacity-100
  data-[state=active]:after:scale-x-100
`;

const TravelTypeTabs = () => {
  return (
    <Tabs defaultValue="flight">
      <TabsList
        className="
          bg-white
          rounded-[20px]
          p-8
          flex
          gap-[50px]
          shadow-sm
        "
      >
        <TabsTrigger value="tour" className={triggerClass}>
          <BankIcon className="size-6" />
          تور
        </TabsTrigger>

        <TabsTrigger value="bus" className={triggerClass}>
          <BusIcon className="size-6" />
          اتوبوس
        </TabsTrigger>

        <TabsTrigger value="train" className={triggerClass}>
          <BankIcon className="size-5" />
          قطار
        </TabsTrigger>

        <TabsTrigger value="hotel" className={triggerClass}>
          <BankIcon className="size-5" />
          هتل
        </TabsTrigger>

        <TabsTrigger value="flight" className={triggerClass}>
          <BankIcon className="size-5" />
          پرواز
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TravelTypeTabs;
