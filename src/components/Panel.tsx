import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

// export interface BasePanelProps {
//   title: string;
//   headerClass?: string;
// }
//
// export type PanelSuccessType = BasePanelProps & {
//   isSuccess: true;
//   isFail?: false;
// }
//
// export type PanelFailType = BasePanelProps & {
//   isFail: true;
//   isSuccess?: false;
// }
//
// export type PanelProps = PanelSuccessType | PanelFailType;

export interface PanelProps {
  title: string;
  headerClass?: string;
  type?: 'success' | 'fail';
  icon?: string;
  onIconClick?: () => void;
}

export function Panel({ title, children, ...rest }: PropsWithChildren<PanelProps>) {

  const headerClasses = cn(`card-header ${rest.headerClass}`, {
    'bg-success': rest.type === 'success',
    'bg-danger': rest.type === 'fail',
    'text-white': rest.type
  });

  return <>
    <div className="card">
      <div className={headerClasses}>
        {title}
        { !!rest.icon &&
          <i onClick={rest.onIconClick} className={rest.icon} style={{ marginLeft: 10 }}/>
        }
      </div>
      <div className="card-body">{children}</div>
    </div>
  </>
}
