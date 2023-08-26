import { Warning2 } from "iconsax-react";

export default function Pill({ label, onClick, index }) {
    return <div onClick={onClick} className={`hp-bg-black-40 hp-bg-dark-70 hp-text-color-black-bg hp-hover-bg-black-bg hp-hover-text-color-black-0 hp-d-flex hp-d-flex-justify-center hp-cursor-pointer hp-px-16 ${index === 0 ? 'hp-ml-0' : 'hp-mx-6'} hp-py-8 hp-text-center h5 hp-font-weight-400 hp-mb-0 hp-border-radius-full hp-transition`}>
    {label || <Warning2 />}
</div>
}