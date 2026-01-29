interface InputProps {
  type?: string;
  placeholder?: string;

}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <div className="relative group">
      {type === 'textarea' ?
        <textarea name="message" className="w-full bg-instagram h-155 p-16 rounded-8 "></textarea>
        :
        <input type={type} required className="h-60 w-full bg-instagram px-16 rounded-8" />}
      <span className="group-focus-within:hidden absolute group-empty:block top-18 left-16 text-16 text-main font-Montserrat-bold">{placeholder} <span className="text-red-500">*</span></span>
    </div>
  );
}