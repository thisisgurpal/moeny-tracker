import { useState, useEffect } from "react";
import {
    Card,
    Grid,
    Tab,
    TabList,
    Text,
    Title,
    BadgeDelta,
    DeltaType,
    Metric,
    ProgressBar,
    AreaChart,
    Icon,
    Toggle,
    ToggleItem
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { Flex } from "@chakra-ui/react";
import { userIsAuthenticated } from "./helper/auth";
export const performance = [
    {
        date: "2021-01-01",
        Sales: 900.73,
        Profit: 173,
        Customers: 73,
    },
    {
        date: "2021-01-02",
        Sales: 1000.74,
        Profit: 174.6,
        Customers: 74,
    },
    // ...
    {
        date: "2021-03-13",
        Sales: 882,
        Profit: 682,
        Customers: 682,
    },
];

// Basic formatters for the chart values
const dollarFormatter = (value: number) =>
    `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) =>
    `${Intl.NumberFormat("us").format(value).toString()}`;



type Kpi = {
    title: string;
    metric: string;
    progress: number;
    target: string;
    delta: string;
    deltaType: DeltaType;
};

const kpiData: Kpi[] = [
    {
        title: "Sales",
        metric: "$ 12,699",
        progress: 15.9,
        target: "$ 80,000",
        delta: "13.2%",
        deltaType: "moderateIncrease",
    },
    {
        title: "Profit",
        metric: "$ 45,564",
        progress: 36.5,
        target: "$ 125,000",
        delta: "23.9%",
        deltaType: "increase",
    },
    {
        title: "Customers",
        metric: "1,072",
        progress: 53.6,
        target: "2,000",
        delta: "10.1%",
        deltaType: "moderateDecrease",
    },
];

const DummyDashboard = () => {
    const [selectedKpi, setSelectedKpi] = useState("Sales");

    // map formatters by selectedKpi
    const formatters: { [key: string]: any } = {
        Sales: dollarFormatter,
        Profit: dollarFormatter,
        Customers: numberFormatter,
    };
    const [selectedView, setSelectedView] = useState("1");

    useEffect(() => {
        const targetDiv = document.getElementById('target-div');

        // Add a CSS blur dynamically
        if (targetDiv) {
            targetDiv.style.filter = 'blur(10px)';
            targetDiv.style.pointerEvents = 'none'; // Disable pointer events on the element
        }
    }, []);

    return (
        <div id='target-div'>
            < Flex justifyContent='center' alignItems='center' >
                <main id='main-dashboard' className="bg-slate-50 p-6 sm:p-10">
                    <Title>Dashboard</Title>
                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

                    <TabList
                        defaultValue="1"
                        onValueChange={(value) => setSelectedView(value)}
                        className="mt-6"
                    >
                        <Tab value="1" text="Overview" />
                        <Tab value="2" text="Detail" />
                    </TabList>

                    {selectedView === "1" ? (
                        <>
                            <Grid numColsLg={3} className="mt-6 gap-6">
                                {kpiData.map((item) => (
                                    <Card key={item.title}>
                                        <Flex alignItems="start">
                                            <div className="truncate">
                                                <Text>{item.title}</Text>
                                                <Metric className="truncate">{item.metric}</Metric>
                                            </div>
                                            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                                        </Flex>
                                        <Flex className="mt-4 space-x-2">
                                            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
                                            <Text>{item.target}</Text>
                                        </Flex>
                                        <ProgressBar percentageValue={item.progress} className="mt-2" />
                                    </Card>
                                ))}
                            </Grid>

                            <div className="mt-6">
                                <Card>
                                    <div className="md:flex justify-between">
                                        <div>
                                            <Flex
                                                justifyContent="start"
                                                className="space-x-0.5"
                                                alignItems="center"
                                            >
                                                <Title> Performance History </Title>
                                                <Icon
                                                    icon={InformationCircleIcon}
                                                    variant="simple"
                                                    tooltip="Shows day-over-day (%) changes of past performance"
                                                />
                                            </Flex>
                                            <Text> Daily increase or decrease per domain </Text>
                                        </div>
                                        <div className="mt-6 md:mt-0">
                                            <Toggle
                                                color="zinc"
                                                defaultValue={selectedKpi}
                                                onValueChange={(value) => setSelectedKpi(value)}
                                            >
                                                <ToggleItem value="Sales" text="Sales" />
                                                <ToggleItem value="Profit" text="Profit" />
                                                <ToggleItem value="Customers" text="Customers" />
                                            </Toggle>
                                        </div>
                                    </div>
                                    <AreaChart
                                        data={performance}
                                        index="date"
                                        categories={[selectedKpi]}
                                        colors={["blue"]}
                                        showLegend={false}
                                        valueFormatter={formatters[selectedKpi]}
                                        yAxisWidth={56}
                                        className="h-96 mt-8"
                                    />
                                </Card>
                            </div>
                        </>
                    ) : (
                        <Card className="mt-6">
                            <div className="h-96" />
                        </Card>
                    )}
                </main>
            </Flex >
        </div>
    );
}

export default DummyDashboard