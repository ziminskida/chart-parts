import { Path } from 'd3-path'
import { SGMark, SGImageItem, MarkType } from '@gog/mark-interfaces'
import { VSvgNode } from '@gog/vdom-interfaces'
import { copyCommonProps, assertTypeIs } from './util'
import { MarkPrerenderer } from '@gog/prerender-interfaces'
import { VSvgMarkPrerenderer } from './interfaces'

export class ImageRenderer implements VSvgMarkPrerenderer {
	public static TARGET_MARK_TYPE = MarkType.Image

	public render(mark: SGMark<SGImageItem>) {
		assertTypeIs(mark, ImageRenderer.TARGET_MARK_TYPE)
		// TODO
		return { nodes: [] }
	}
}
