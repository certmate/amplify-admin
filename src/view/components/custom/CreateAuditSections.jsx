import { Divider, Switch } from "antd";
import { Field, FieldArray } from "formik";
import { keys } from "lodash";


export default function CreateAuditSections({ field, values, ...data }) {
    return <>
        <Divider />
        <span className="hp-d-block  hp-text-black hp-mb-8">Certificate Sections</span>
        <FieldArray
            name={field}
            render={({ remove, push }) => (
                <div>
                    {values[field].map((_, index) => (
                        <div key={index} className="hp-mb-16">
                            <Divider />
                            <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">{values[field][index]?.heading}</span>
                            <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">Section Heading</span>
                            <Field name={`${field}[${index}].heading`} className='ant-input hp-mb-8' />
                            <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">Result</span>
                            <Switch checkedChildren="Pass" unCheckedChildren="Fail" className="hp-mb-8" />
                            <span className="hp-d-block hp-input-label hp-text-black hp-mb-8">Items</span>
                            <Field as="textarea" name={`${field}.${index}.description`} className='ant-input hp-mb-8' />

                            <button type="button" onClick={() => remove(index)}>
                                Remove Section
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => push({ heading: '', result: '', items: [] })}
                    >
                        Add Section
                    </button>
                </div>
            )}
        />
        <Divider />
    </>
}