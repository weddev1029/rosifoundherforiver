import Link from "next/link";

export function Footer() {
  return (
    <footer className="font-archivo bg-footer text-[#B0B0B0] py-6">
      <h5 className="text-center text-[10px] xs:text-xs sm:text-base">
        © 2025 By Prince & Rosilyn. Preserved digitally by&nbsp;
        <Link
          href="https://www.facebook.com/profile.php?id=61584197138941"
          className="underline underline-offset-2 hover:underline-offset-8 transition-all hover:text-custom-primary"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          DigiTale Works
        </Link>
      </h5>
    </footer>
  );
}
