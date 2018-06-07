import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
`
const NameColumn = styled.div`
	width: 80px;
`
const InputColumn = styled.input`
	flex: 2;
`

export interface ToggleProps {
	name: string
	value?: boolean
	onChange?: (value: boolean) => void
}

export const Toggle: React.SFC<ToggleProps> = ({
	name,
	value,
	onChange = (v: any) => null,
}) => {
	const handleChange = evt => onChange(evt.target.checked)
	return (
		<Container>
			<NameColumn>{name}</NameColumn>
			<InputColumn
				type="checkbox"
				name={name}
				checked={value}
				onChange={handleChange}
			/>
			<div>{value}</div>
		</Container>
	)
}