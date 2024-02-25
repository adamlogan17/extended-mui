/**
 * Represents a key-value pair, where the key is a string label and the value can be of any type.
 *
 * This type is used throughout the codebase in places where we need to associate a label (a string) with a value (of any type).
 * This is a flexible type that can be used to represent a wide variety of data structures.
 *
 * @author Adam logan
 *
 * @typedef LabelValuePair
 * @property {string} label - The key of the pair, represented as a string.
 * @property {any} value - The value of the pair, which can be of any type.
 */
type LabelValuePair = {
	label: string;
	value: any;
};

/**
 * `xAxisPosition` is a type that defines the possible positions for an element along the x-axis.
 *
 * @typedef xAxisPosition
 */
type xAxisPosition = 'left' | 'right';

/**
 * Represents the props that can be passed to the AdvancedNavBar component.
 *
 * This type is used to represent the props that can be passed to the AdvancedNavBar component.
 *
 * @typedef AdvancedNavBarProps
 * @property {xAxisPosition} navPosition - The position of the navigation bar. This can be either 'left' or 'right'.
 * @property {string} [backgroundColor] - The background color of the navigation bar.
 * @property {string} [color] - The text color of the navigation bar.
 * @property {React.Dispatch<React.SetStateAction<number>>} [navPush] - A function that can be used to update the position of the navigation bar.
 * @property {LabelValuePair[]} navItems - An array of LabelValuePair objects that represent the items in the navigation bar.
 */
type AdvancedNavBarProps = {
	navPosition: xAxisPosition;
	backgroundColor?: string;
	color?: string;
	navPush?: React.Dispatch<React.SetStateAction<number>>;
	navItems: LabelValuePair[];
};

/**
 * `NavButtonProps` is a type that defines the properties for the `NavButton` component.
 * 
 * @typedef NavButtonProps
 * @property {() => void} toggle - The function to call when the button is clicked. This function should handle toggling the state of the navigation bar.
 * @property {string} color - The color of the button.
 * @property {xAxisPosition} navPosition - The position of the navigation button.
 */
type NavButtonProps = {
	toggle: () => void;
	color: string;
	navPosition: xAxisPosition;
};
