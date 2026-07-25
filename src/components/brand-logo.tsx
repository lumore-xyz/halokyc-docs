import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: BrandLogoProps) {
  return (
    <span className={["halo-logo", className].filter(Boolean).join(" ")}>
      <Image
        src="/assets/logo/halokyc-icon.svg"
        alt="HaloKYC"
        width={100}
        height={100}
        priority={priority}
      />
    </span>
  );
}
