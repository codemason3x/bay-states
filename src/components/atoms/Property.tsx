interface PropertyProps {
    property: string;
    value:string;
}

export default function Property({property, value}:PropertyProps) {
  return (
    <div className="text-center flex flex-col border border-property-border">
      <span className="text-11 leading-22">
        {property}
      </span>
      <span className="text-12 leading-22">
        {value}
      </span>
    </div>
  )
}
