export default function Button({ style }) {
  return (
    <button
      className={`${style} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
    >
      Get Started
    </button>
  );
}
