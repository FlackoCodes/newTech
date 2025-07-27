import { tiers } from "../data";
import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingComp() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.name}
                    className={classNames(
                      "text-gray-900",
                      "text-lg/8 font-semibold"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p
                      className={
                        tier.id === 1
                          ? "rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600 uppercase"
                          : "bg-black text-white rounded-full py-2 px-4 uppercase"
                      }
                    >
                      {tier.id === 0 && "Save 20%"}
                      {tier.id === 1 && "Popular"}
                      {tier.id === 2 && "Save 30%"}
                    </p>
                  ) : null}
                </div>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-4 w-3 flex-none text-[#31C65B]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.name}
                className={classNames(
                  tier.id === 1
                    ? "bg-indigo-600 text-white shadow-xs hover:bg-indigo-500"
                    : "bg-black text-white ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
