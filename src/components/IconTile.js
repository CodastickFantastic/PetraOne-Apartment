import Image from "next/image";

export default function IconTile({ icon, title }) {
  return (
    <div className="standardTile">
      <Image src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}
