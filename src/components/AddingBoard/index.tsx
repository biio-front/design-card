import { shallowEqual } from 'react-redux';

import { addElement, selectItem } from '../../reducers/canvas';
import { useAppDispatch, useAppSelector } from '../../store';

import './index.scss';

type Props = { setMode: Function; resetValues: Function };

function AddingBoard({ setMode, resetValues }: Props) {
  const dispatch = useAppDispatch();
  const canvasElements = useAppSelector((state) => state.canvas.canvas.items, shallowEqual);
  const INITIAL_ITEM = { className: '', id: '', styles: { posX: 20, posY: 20 } };

  return (
    <div className='adding-board'>
      <button
        className='paint'
        type='button'
        onClick={() => {
          setMode('bg-color');
          dispatch(selectItem(INITIAL_ITEM));
        }}
      >
        <span className='material-icons'>format_color_fill</span>
      </button>

      <button
        className='text'
        type='button'
        onClick={() => {
          setMode('text');

          const element = {
            className: 'text',
            id: `item-${canvasElements.length}`,
            styles: { posX: 20, posY: 20 },
          };

          resetValues();
          dispatch(addElement(element));
          dispatch(selectItem(element));
        }}
      >
        <span className='material-icons'>text_fields</span>
      </button>
    </div>
  );
}

export default AddingBoard;
