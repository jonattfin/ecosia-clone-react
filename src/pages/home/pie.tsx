import { ResponsivePie } from '@nivo/pie'

const commonProperties = {
    animate: true,
    // activeOuterRadiusOffset: 8,
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data = getData() /* see data tab */ }) => (
    <ResponsivePie
        {...commonProperties}
        data={data}
        innerRadius={0.6}
        padAngle={0.5}
        cornerRadius={5}
        enableArcLabels={false}
    />
)

export default MyResponsivePie;

function getData() {
    return [
        {
            "id": "go",
            "label": "go",
            "value": 38,
            "color": "hsl(74, 70%, 50%)"
        },
        {
            "id": "make",
            "label": "make",
            "value": 564,
            "color": "hsl(67, 70%, 50%)"
        },
        {
            "id": "rust",
            "label": "rust",
            "value": 70,
            "color": "hsl(344, 70%, 50%)"
        },
        {
            "id": "ruby",
            "label": "ruby",
            "value": 65,
            "color": "hsl(160, 70%, 50%)"
        },
        {
            "id": "php",
            "label": "php",
            "value": 431,
            "color": "hsl(58, 70%, 50%)"
        }
    ];
}
