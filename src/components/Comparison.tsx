import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ComparisonTiers, sections } from "../data";

export default function Comparison() {
  return (
    <div className="bg-white md:pt-14">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8 text-center">
        <h1 className="text-lg font-semibold tracking-tight text-balance text-gray-950 md:text-3xl lg:text-pretty">
          Compare pricing packages
        </h1>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#7775D6,#592E71,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#7775D6,#592E71,#030712_70%)]" />
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {ComparisonTiers.map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-indigo-600">
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {ComparisonTiers.map((tier) => (
                <td key={tier.name} className="px-0 pt-3 pb-0">
                  <a>
                    {tier.name === "Standard" && "$7.99"}
                    {tier.name === "Super" && "$14.99"}
                    {tier.name === "Supreme" && "$19.99"}
                  </a>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 last:border-none"
                >
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    {feature.name}
                  </th>
                  {ComparisonTiers.map((tier) => {
                    const tierValue = feature.tiers[tier.name];
                    return (
                      <td key={tier.name} className="p-4 max-sm:text-center">
                        {typeof tierValue === "string" ? (
                          <>
                            <span className="sr-only">
                              {tier.name} includes:
                            </span>
                            <span className="text-sm/6 text-gray-950">
                              {tierValue}
                            </span>
                          </>
                        ) : (
                          <>
                            {tierValue === true ? (
                              <CheckIcon
                                aria-hidden="true"
                                className="inline-block size-4 fill-green-600"
                              />
                            ) : (
                              <MinusIcon
                                aria-hidden="true"
                                className="inline-block size-4 fill-gray-400"
                              />
                            )}

                            <span className="sr-only">
                              {tierValue === true
                                ? `Included in ${tier.name}`
                                : `Not included in ${tier.name}`}
                            </span>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {ComparisonTiers.map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-indigo-600 data-selected:border-indigo-600 [&:not([data-focus])]:focus:outline-hidden"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {ComparisonTiers.map((tier) => (
              <TabPanel key={tier.name}>
                <a
                  href={tier.href}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  $7.99
                </a>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => {
                        const tierValue = feature.tiers[tier.name];
                        return (
                          <div
                            key={feature.name}
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">
                              {feature.name}
                            </dt>
                            <dd className="text-center">
                              {typeof tierValue === "string" ? (
                                <span className="text-sm/6 text-gray-950">
                                  {tierValue}
                                </span>
                              ) : (
                                <>
                                  {tierValue === true ? (
                                    <CheckIcon
                                      aria-hidden="true"
                                      className="inline-block size-4 fill-green-600"
                                    />
                                  ) : (
                                    <MinusIcon
                                      aria-hidden="true"
                                      className="inline-block size-4 fill-gray-400"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {tierValue === true ? "Yes" : "No"}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
