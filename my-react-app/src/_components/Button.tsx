import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-base flex items-center gap-2 justify-center px-4 py-2 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-neutral-950 text-neutral-300 hover:bg-neutral-800 ",
        outline:
          "bg-transparent border border-neutral-200 hover:bg-neutral-200",
        danger: "bg-red-600 text-white hover:bg-red-500",
        ghost: "hover:bg-neutral-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ children, variant, className }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
}
