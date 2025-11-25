import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Efficient Automated Referrals",
    description:
      "Accelerate referral workflows with intelligent automation, customisable forms, and flexible triage options tailored to your pathways.",
  },
  {
    title: "Quick Patient Finder",
    description:
      "Rapidly locate patients and surface the right referral tools so clinicians can deliver faster, more efficient care.",
  },
  {
    title: "Better, Effective Communication",
    description:
      "Enhance referral quality with Advice & Guidance available across every department to keep teams aligned.",
  },
  {
    title: "Seamless Integration",
    description:
      "Interoperable by design to fit alongside existing healthcare systems from Community to Secondary Care, and back again.",
  },
];

const highlights = [
  {
    title: "Customisable forms",
    detail: "Capture the exact data each service needs with reusable templates and smart validation.",
  },
  {
    title: "Flexible triage",
    detail: "Route referrals automatically based on priority, specialty, or local pathways.",
  },
  {
    title: "Collaboration built-in",
    detail: "Enable multidisciplinary teams to review, comment, and agree on the best next step together.",
  },
  {
    title: "Trusted connectivity",
    detail: "Secure, standards-based interoperability means EyeV works where your clinicians already do.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 lg:pt-24">
        <header className="grid gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              EyeV Referral Platform
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Efficient Automated Community to Provider Referrals
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              Accelerate referral workflows with intelligent automation, customisable forms, and flexible triage options. With
              features like our Quick Patient Finder and tailored referral tools, healthcare teams can deliver faster, more
              efficient care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-indigo-600 px-7 text-base font-semibold hover:bg-indigo-700">
                Book a demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-indigo-200 bg-white px-7 text-base font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Explore platform
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:max-w-xl sm:grid-cols-4">
              {["Automation", "Compliance", "Interoperability", "Support"].map((item) => (
                <div key={item} className="rounded-xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <dt className="text-sm font-medium text-slate-500">{item}</dt>
                  <dd className="mt-2 text-lg font-semibold text-slate-900">Built-in</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-white to-blue-50" aria-hidden />
              <div className="relative space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Designed for the way clinical teams work</h2>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold">Better, Effective Communication</p>
                      <p className="mt-1 text-slate-600">
                        Enhance referral quality and save valuable time with Advice & Guidance available across all Trust departments.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold">Seamless Integration and Application</p>
                      <p className="mt-1 text-slate-600">
                        Fully interoperable to integrate effortlessly with existing healthcare systems—Community to Secondary Care,
                        and back again.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold">We believe connectivity should be the standard</p>
                      <p className="mt-1 text-slate-600">With EyeV, it is.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Capabilities</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Built to streamline every referral</h2>
              <p className="mt-3 max-w-3xl text-lg text-slate-700">
                From the first clinical question to a fully triaged referral, EyeV keeps teams aligned and moves patients forward
                without the usual friction.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-indigo-200 px-5 text-indigo-700 hover:bg-indigo-50">
              View workflow
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full border-slate-200 bg-white/80 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">{feature.description}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">Collaboration</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Better, Effective Communication for multidisciplinary teams
              </h2>
              <p className="text-lg text-slate-200">
                Advice & Guidance (A&G) keeps conversations flowing between departments, helping clinicians agree on the best next
                step with confidence. Shared context means fewer delays and a better experience for patients.
              </p>
              <div className="flex flex-wrap gap-3">
                {highlightLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item.title} className="border-white/10 bg-white/10 text-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-200">{item.detail}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-200">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Integration</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Seamless Integration and Application
              </h2>
              <p className="text-lg text-slate-700">
                Our platforms are fully interoperable, designed to integrate effortlessly with existing healthcare systems—from
                Community to Secondary Care, and back again. We believe this level of connectivity should be the standard…. with EyeV,
                it is.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Standards-based APIs", "Secure data exchange", "Configurable pathways", "Expert onboarding"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                      •
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 p-[1px] shadow-xl">
              <div className="h-full rounded-2xl bg-slate-900 p-8 text-white">
                <h3 className="text-xl font-semibold">What you get</h3>
                <ul className="mt-6 space-y-4 text-slate-100">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Live status tracking for referrals, triage, and outcomes.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Secure collaboration across organisations with consistent governance.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Configurable workflows that adapt to regional needs without code changes.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Insightful analytics to continually improve throughput and quality.
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100">Get started</Button>
                  <Button variant="ghost" className="rounded-full text-white hover:bg-white/10">
                    Talk to us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const highlightLabels = ["A&G included", "Across all departments", "Multidisciplinary collaboration", "Faster outcomes"];
