export interface Section {
  id: string;
  label: string;
}

export interface Props {
  sections: Section[];
  active: string;
}
