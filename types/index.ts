import { MouseEventHandler } from 'react';

export interface HomeProps {
    searchParams: FilterProps;

}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;

}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface FilterProps {
    manufacturer: string;
    model: string;
    fuel: string;
    year: number;
    limit: number;
}

export interface SearchButtonProps {
    otherClasses: string;
}

export interface CarDetailsProps {
    car: CarProps;
    closeModal: () => void;
    isOpen: boolean;
  }

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}