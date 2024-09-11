// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let variable: string | number;

variable = "text";
variable = 5;

type EnableOrDisable = "enable" | "disable";

let text: EnableOrDisable;

text = "disable";
text = "enable";
