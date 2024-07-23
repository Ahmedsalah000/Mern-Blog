// Custom Toolbar component
const CustomToolbar = () => (
    <div id="toolbar">
        <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
            <option value="1">Heading</option>
            <option value="2">Subheading</option>
            <option value="">Normal</option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-code-block"></button>
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-link"></button>
        <button className="ql-image"></button>
    </div>
);

export default CustomToolbar;