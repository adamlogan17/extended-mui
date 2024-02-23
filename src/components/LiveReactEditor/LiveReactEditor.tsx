import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import useMediaQuery from '../../hooks/useMediaQuery';
import { CSSProperties } from 'react';

/**
 * @function LiveReactEditor
 *
 * @component
 * @author @adamlogan17
 * @param {LiveReactEditorProps} props Properties for the LiveReactEditor component.
 * @returns {JSX.Element} A JSX Element representing the LiveReactEditor component.
 */
export default function LiveReactEditor(props: LiveReactEditorProps) {
	const mediaTrigger: boolean = useMediaQuery(`(min-width: ${props.mediaBreakpoint || 1200}px)`);

	const borderStyle: string = `${props.borderSize || 5}px solid ${props.borderColor || '#f0f0f0'}`;

	const previewStyle: CSSProperties = {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};

	return (
		<LiveProvider code={props.code} scope={props.scope}>
			<div
				style={{
					border: borderStyle,
					display: 'flex',
					flexDirection: mediaTrigger ? 'row' : 'column',
					borderRadius: '10px'
				}}
			>
				<LiveEditor
					style={{
						flex: 1,
						borderRight: mediaTrigger ? borderStyle : 'none',
						borderBottom: mediaTrigger ? 'none' : borderStyle
					}}
				/>
				<LiveError style={previewStyle} />
				<LivePreview style={previewStyle} />
			</div>
		</LiveProvider>
	);
}
