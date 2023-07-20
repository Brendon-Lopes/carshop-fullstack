import ReactModal from "react-modal";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen }: IProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="
        px-10
        py-7
        bg-slate-100
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        rounded-lg
        min-w-[30rem]
      "
      overlayClassName="
        bg-black
        bg-opacity-50
        absolute top-0
        left-0
        w-full
        h-full
      "
    >
      {children}
    </ReactModal>
  );
};
