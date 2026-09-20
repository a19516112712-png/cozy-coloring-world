import { KIT_FORM_ACTION } from "@/lib/kit";

interface FreeColoringPackFormProps {
  submitLabel?: string;
  instanceId?: string;
}

export default function FreeColoringPackForm({
  submitLabel = "GET MY 100 FREE PAGES",
  instanceId = "lead",
}: FreeColoringPackFormProps) {
  const firstNameId = `${instanceId}-first-name`;
  const emailId = `${instanceId}-email`;

  return (
    <form
      action={KIT_FORM_ACTION}
      method="post"
      acceptCharset="UTF-8"
      className="mx-auto mt-8 max-w-xl"
    >
      {/* Kit form action and field names are configured in lib/kit.ts */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-left">
          <label
            htmlFor={firstNameId}
            className="mb-2 block text-sm font-semibold text-cocoa"
          >
            First name
          </label>
          <input
            id={firstNameId}
            name="fields[first_name]"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className="min-h-[48px] w-full rounded-pill border border-blush bg-white px-5 py-3 text-cocoa placeholder:text-cocoa/40 outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/20"
          />
        </div>

        <div className="text-left">
          <label
            htmlFor={emailId}
            className="mb-2 block text-sm font-semibold text-cocoa"
          >
            Email address
          </label>
          <input
            id={emailId}
            name="email_address"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            required
            className="min-h-[48px] w-full rounded-pill border border-blush bg-white px-5 py-3 text-cocoa placeholder:text-cocoa/40 outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-pill bg-rose px-8 py-4 text-base font-bold text-white shadow-cozy transition-all hover:-translate-y-0.5 hover:bg-rose/90 hover:shadow-hover sm:text-lg"
      >
        {submitLabel}
      </button>

      <p className="mt-4 text-sm leading-relaxed text-cocoa/55">
        No spam. Just cozy coloring inspiration and your free pages.
      </p>
    </form>
  );
}
