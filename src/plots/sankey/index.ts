import { Plot } from '../../core/plot';
import { Adaptor } from '../../core/adaptor';
import { SankeyOptions } from './types';
import { adaptor } from './adaptor';

export { SankeyOptions };

/**
 *  桑基图 Sankey
 */
export class Sankey extends Plot<SankeyOptions> {
  /** 图表类型 */
  public type: string = 'sankey';

  /**
   * 获取适配器
   */
  protected getSchemaAdaptor(): Adaptor<SankeyOptions> {
    return adaptor;
  }
}
