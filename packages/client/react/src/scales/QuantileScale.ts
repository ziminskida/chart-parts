import { ScaleCreationContext } from '@markable/interfaces'
import { quantize } from '@markable/scales'
import { DomainRangeScale, DomainRangeScaleProps } from './DomainRangeScale'
import { QuantitativeValue } from './quantitative/QuantitativeScale'

export interface QuantileScaleProps<DomainValue, RangeValue>
	extends DomainRangeScaleProps<[DomainValue, DomainValue], RangeValue[], {}> {}

export abstract class QuantileScale<
	DomainValue extends QuantitativeValue,
	RangeValue extends QuantitativeValue
> extends DomainRangeScale<
	QuantileScaleProps<DomainValue, RangeValue>,
	[DomainValue, DomainValue],
	RangeValue[],
	{}
> {
	protected handleRangeBind(
		args: ScaleCreationContext,
		rangeBind: {},
	): [RangeValue, RangeValue] {
		throw new Error('Range bind not supported in Quantize scale')
	}

	protected createScale() {
		return quantize(this.props.name)
			.table(this.props.table)
			.domain(this.props.domain)
			.range(this.props.range)
			.reverse(this.props.reverse)
			.build()
	}
}
