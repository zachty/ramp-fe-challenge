import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        {/* gives warning for putting onChange in label so putting input inside the label seems like the easiest solution */}
        <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(!checked)}
        />
      </label>
    </div>
  )
}
