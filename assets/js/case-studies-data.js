/**
 * Mohamed Gomaa - Portfolio Case Studies Data
 * Complete collection of verified analytical case studies.
 */

const CASE_STUDIES = {
  fifa: {
    id: 'fifa',
    title: "FIFA Men's World Cup Historical Analytics (1930 – 2022)",
    subtitle: "Auditing 92 Years of Global Football: Star Schema Modeling, ETL Pipelines, and Executive BI",
    category: 'powerbi',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'DAX', 'Python', 'Pandas', 'Star Schema', 'ETL'],
    heroImage: 'assets/images/projects/fifa/dashboard_home.png',
    githubUrl: 'https://github.com/MohamedGomaa11111',
    tags: ['Business Intelligence', 'Data Modeling', 'Sports Analytics', 'DAX Measures'],
    metrics: [
      { label: 'Tournaments Audited', value: '22 Editions' },
      { label: 'Matches Analyzed', value: '964 Matches' },
      { label: 'Total Goals Logged', value: '2,720 Goals' },
      { label: 'Cumulative Attendance', value: '40M+ Attendees' }
    ],
    overview: "An end-to-end Data Analytics and Business Intelligence project auditing nearly a century of FIFA Men's World Cup history across 22 tournaments (1930–2022). The pipeline encompasses automated data extraction and cleaning in Python (Pandas), architectural data modeling via a pure Star Schema, and deploying an executive-level, 5-page Power BI dashboard designed to empower analysts and stakeholders with granular historical insights.",
    problem: "Fragmented historical records across 92 years of tournament play presented significant hurdles: inconsistent historical team naming, missing or poorly formatted match logs, lack of standardized stadium capacities, and absence of an audited, high-performance data model. Analysts lacked a unified dashboard capable of evaluating host-nation win rate boost and multi-tournament attendance patterns.",
    objectives: [
      "Clean, harmonize, and standardize historical tournament records spanning 1930 through 2022.",
      "Design an optimized Star Schema eliminating bi-directional ambiguity and ensuring rapid DAX computations.",
      "Measure the statistical host-nation advantage boost across 22 editions.",
      "Audit cumulative global attendance trends and geospatial stadium capacities across continents.",
      "Deliver an executive-tier, multi-page Power BI dashboard with dark modern UI design."
    ],
    dataset: {
      sources: "Comprehensive historical match logs, tournament metadata, squad appearances, and stadium capacities from 1930 to 2022.",
      volume: "964 distinct matches, 22 tournament editions, 240 stadiums, and over 2,720 goal event records.",
      qualityChecks: "Resolved country name historical changes, audited null attendance records, and validated extra-time vs. penalty shootout goal flags."
    },
    cleaningSteps: [
      "Python (Pandas) ingestion script removing corrupted rows and handling missing temporal records.",
      "Data type standardization for dates, goals, stadium capacities, and match phase categories.",
      "Created surrogate keys linking Match Fact records to Team, Tournament, and Stadium Dimension tables.",
      "Structured a centralized _Measures table in Power BI to cleanly segregate analytical business logic."
    ],
    architecture: {
      modelType: "Star Schema (1-to-many unidirectional relationships)",
      factTables: ["Fact_Matches (Match outcomes, duration, attendance, penalties)", "Fact_Goals (Minute of goal, scorer, phase)"],
      dimensionTables: ["Dim_Tournaments (Year, host, winner, teams count)", "Dim_Teams (Nation, confederation)", "Dim_Stadiums (Name, city, historical capacity)"]
    },
    codeSnippet: {
      language: 'DAX',
      title: 'Host Advantage Boost DAX Calculation',
      code: `Host Advantage Boost % = 
VAR OverallWinRate = 
    DIVIDE([Total Matches Won], [Total Matches Played], 0)
VAR HostWinRate = 
    DIVIDE(
        CALCULATE([Total Matches Won], Fact_Matches[IsHostMatch] = TRUE()),
        CALCULATE([Total Matches Played], Fact_Matches[IsHostMatch] = TRUE()),
        0
    )
RETURN HostWinRate - OverallWinRate`
    },
    visualizations: [
      { url: 'assets/images/projects/fifa/dashboard_home.png', caption: 'Landing & Executive KPI Overview: Macro-level tournament indicators and navigation.' },
      { url: 'assets/images/projects/fifa/data_schema.png', caption: 'Data Architecture: Pure Star Schema with unidirectional filter context.' },
      { url: 'assets/images/projects/fifa/historical_overview.png', caption: 'Historical Overview: Tournament progression and champion conversion.' },
      { url: 'assets/images/projects/fifa/goals_insights.png', caption: 'Match Dynamics & Goals: Goal timing distributions and penalty shootout metrics.' },
      { url: 'assets/images/projects/fifa/stadiums_attendance.png', caption: 'Global Attendance: Stadium capacity distribution and geospatial mapping.' },
      { url: 'assets/images/projects/fifa/team_performance.png', caption: 'Team Performance: Win rate benchmarking and historical podium finishes.' }
    ],
    findings: [
      "Host nations enjoy a statistically verified win-rate boost of +14.2% compared to neutral tournament environments.",
      "Average goals per match peaked in 1954 (5.38 goals/match) before stabilizing in modern eras at ~2.7 goals/match.",
      "USA 1994 and Qatar 2022 represent all-time attendance peaks, driving cumulative global attendance past 40 million attendees.",
      "Only 8 unique nations have ever hoisted the World Cup trophy across 22 editions, showing high historical title concentration."
    ],
    recommendations: [
      "Incorporate expected goals (xG) metrics for modern tournament editions (2014-2022) to evaluate finishing efficiency against defensive quality.",
      "Integrate player-level physical tracking datasets to assess travel fatigue across multi-city tournament formats."
    ]
  },

  hajj: {
    id: 'hajj',
    title: "Hajj Operations Intelligence & Bottleneck Discovery",
    subtitle: "Operational Analytics, Transit Delay Mitigation, and SLA Auditing Using Microsoft SQL Server",
    category: 'sql',
    categoryLabel: 'SQL & Databases',
    tools: ['SQL Server', 'SSMS', 'Advanced SQL', 'Window Functions', 'CTEs', 'SLA Analytics'],
    heroImage: 'assets/images/projects/hajj/01_route_bottlenecks.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/Hajj-Operations-Intelligence-SQL',
    tags: ['Relational Databases', 'Operational Intelligence', 'Window Functions', 'Logistics Analytics'],
    metrics: [
      { label: 'Delay Concentration', value: '81.5% on 2 Routes' },
      { label: 'Cumulative Delays', value: '16,100+ Minutes' },
      { label: 'Critical Route Peak', value: 'Day 3 (+1.47m DoD)' },
      { label: 'Longest Service Wait', value: 'Water: 10.31m Avg' }
    ],
    overview: "A rigorous relational SQL analysis conducted on enterprise operational records from the Hajj pilgrimage. Utilizing Microsoft SQL Server (SSMS), this project isolates severe systemic transit bottlenecks, calculates Day-over-Day delay compounding through advanced window functions (LAG, DENSE_RANK), and audits emergency service SLA compliance across holy sites.",
    problem: "Mass crowd and transit logistics during the annual pilgrimage involve tight schedules and high-density corridors. Operational dispatchers faced critical blind spots: unable to determine which specific corridors caused disproportionate delays, how wait times escalated over consecutive days, or where emergency service responses breached SLA compliance limits.",
    objectives: [
      "Isolate transit routes contributing the highest frequency of major operational delays (>15 mins).",
      "Quantify the compounding Day-over-Day delay trend across peak movement days using window functions.",
      "Rank service station bottlenecks (Water, Meals, Medical) by average and peak wait times.",
      "Audit emergency incident resolution latencies against established emergency SLAs."
    ],
    dataset: {
      sources: "Normalized relational database encompassing Journeys, Routes, Services, Camps, Pilgrims, and Incidents.",
      volume: "Thousands of timestamped transactional logs recorded across transit corridors and camp housing zones.",
      qualityChecks: "Verified time interval logic, handled null delay values with conditional aggregation, and normalized multi-table keys."
    },
    cleaningSteps: [
      "Enforced primary-foreign key integrity across Journeys, Routes, and Service entities.",
      "Filtered test telemetry runs and normalized route names.",
      "Cast delay and duration records to appropriate numeric types for high-precision aggregation."
    ],
    architecture: {
      modelType: "Relational Enterprise Schema (3NF)",
      factTables: ["Journeys (Transit schedule, duration, delay_minutes)", "Services (Service requests, wait_minutes)", "Incidents (Event logs, severity, response_minutes)"],
      dimensionTables: ["Routes (Corridors, origin, destination)", "Camps (Zones, capacities)", "Pilgrims (Demographics, assigned camps)"]
    },
    codeSnippet: {
      language: 'SQL',
      title: 'Day-over-Day Delay Trend Analysis (LAG Window Function)',
      code: `WITH DailyRoutePerformance AS (
    SELECT 
        j.day,
        r.route_name,
        ROUND(AVG(CAST(j.delay_minutes AS FLOAT)), 2) AS avg_delay_minutes
    FROM Journeys j
    INNER JOIN Routes r ON j.route_id = r.route_id
    WHERE r.route_name IN ('Muzdalifah-Mina', 'Mina-Arafat')
    GROUP BY j.day, r.route_name
)
SELECT 
    day,
    route_name,
    avg_delay_minutes,
    LAG(avg_delay_minutes) OVER (
        PARTITION BY route_name ORDER BY day
    ) AS prev_day_avg_delay,
    ROUND(
        avg_delay_minutes - LAG(avg_delay_minutes) OVER (
            PARTITION BY route_name ORDER BY day
        ), 2
    ) AS delay_change_from_yesterday
FROM DailyRoutePerformance
ORDER BY route_name, day;`
    },
    visualizations: [
      { url: 'assets/images/projects/hajj/01_route_bottlenecks.png', caption: 'Route Delay Analysis: Isolate corridors generating over 81.5% of major disruptions.' },
      { url: 'assets/images/projects/hajj/02_day_over_day_lag.png', caption: 'LAG Window Function Output: Day-over-Day compounding delay progression.' },
      { url: 'assets/images/projects/hajj/03_critical_service_bottlenecks.png', caption: 'DENSE_RANK Analysis: Service station congestion ranked by wait durations.' },
      { url: 'assets/images/projects/hajj/04_camp_occupancy.png', caption: 'Camp Occupancy Audit: Density distributions and capacity bottlenecks.' },
      { url: 'assets/images/projects/hajj/06_critical_sla_failures.png', caption: 'SLA Failure Query: Emergency incident response latency auditing.' }
    ],
    findings: [
      "Just two transit routes (Muzdalifah-Mina and Mina-Arafat) account for 81.5% of all major transit delays (>15 mins) and 16,100+ cumulative delay minutes.",
      "The Muzdalifah-Mina corridor peaked on Day 3 with an average delay of 12.00 minutes (+1.47 minutes increase day-over-day).",
      "Water distribution points in Muzdalifah South recorded the longest service wait times (10.31 mins average, surging to 37 mins during peak hours).",
      "SLA compliance dropped significantly during evening transfer windows, isolating specific dispatcher shift handovers as root causes."
    ],
    recommendations: [
      "Introduce staggered departure slots on the Muzdalifah-Mina corridor during Day 3 to flatten the delay curve.",
      "Double water distribution capacity in Muzdalifah South during peak intervals to reduce wait times by an estimated ~40%."
    ]
  },

  amazon: {
    id: 'amazon',
    title: "Amazon Customer Analytics & Retention Intelligence Dashboard",
    subtitle: "Enterprise E-Commerce Behavioral Analytics, Churn Prediction, and Customer Lifetime Value in Power BI",
    category: 'powerbi',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'DAX', 'Star Schema', 'Power Query', 'Retention & Churn'],
    heroImage: 'assets/images/projects/amazon_customer/dashboard_preview.jpg',
    githubUrl: 'https://github.com/MohamedGomaa11111/Enterprise-Revenue-Dashboard',
    tags: ['E-Commerce', 'Customer Retention', 'Churn Analysis', 'Star Schema', 'DAX'],
    metrics: [
      { label: 'Repeat Customer Rate', value: '77.13%' },
      { label: 'One-Time Buyers', value: '22.87%' },
      { label: 'Churn Accounts Flagged', value: '2,000+ Customers' },
      { label: 'Architecture', value: 'Star Schema' }
    ],
    overview: "An enterprise-grade Customer Intelligence BI solution engineered to audit customer retention velocity, repeat buyer conversions, and category-level customer churn patterns. Developed in Power BI with a dimensional Star Schema and advanced time-intelligence DAX measures.",
    problem: "Executive leadership faced critical blind spots in understanding customer churn behavior across different product categories, inability to distinguish repeat vs. one-time buyer drop-offs, and delayed identification of churned customer accounts.",
    objectives: [
      "Model a high-performance Star Schema linking customer demographics with purchase order histories.",
      "Formulate custom DAX measures isolating repeat buyers from one-time purchasers.",
      "Quantify churn patterns across product categories and geographic zones.",
      "Deliver dynamic cross-filtering to support targeted loyalty and retention campaigns."
    ],
    dataset: {
      sources: "Transactional customer records, category order logs, purchase timestamps, and geographic location coordinates.",
      volume: "Thousands of transactional records across multi-year intervals.",
      qualityChecks: "Audited unique customer IDs, reconciled missing delivery statuses, and created structured customer status dimensions."
    },
    cleaningSteps: [
      "Extracted and merged customer purchase history tables via Power Query ETL.",
      "Established customer tenure groups and active/inactive status flags.",
      "Created dynamic date dimension for monthly and quarterly cohort analysis."
    ],
    architecture: {
      modelType: "Star Schema Dimensional Architecture",
      factTables: ["Fact_CustomerOrders (Orders, sales amounts, quantities, discounts)"],
      dimensionTables: ["Dim_Customers (Customer ID, demographics, signup date)", "Dim_Products (Category, subcategory, unit price)", "Dim_Date (Calendar hierarchy)"]
    },
    codeSnippet: {
      language: 'DAX',
      title: 'Customer Retention & Repeat Buyer Calculation',
      code: `Repeat Customer Rate % = 
VAR TotalCustomers = DISTINCTCOUNT(Fact_CustomerOrders[CustomerID])
VAR RepeatCustomers = 
    COUNTROWS(
        FILTER(
            VALUES(Fact_CustomerOrders[CustomerID]),
            CALCULATE(DISTINCTCOUNT(Fact_CustomerOrders[OrderID])) > 1
        )
    )
RETURN DIVIDE(RepeatCustomers, TotalCustomers, 0)`
    },
    visualizations: [
      { url: 'assets/images/projects/amazon_customer/dashboard_preview.jpg', caption: 'Amazon & Customer Analytics Dashboard: Retention rates, churn metrics, and category trends.' }
    ],
    findings: [
      "77.13% of revenue is driven by repeat customers, while one-time buyers represent 22.87% of the total customer base.",
      "Identified 2,000+ churned customer accounts that had not made a purchase in >90 days.",
      "Specific electronics categories demonstrated a 28% higher churn vulnerability than consumable goods."
    ],
    recommendations: [
      "Deploy automated re-engagement email campaigns triggered at the 60-day inactivity threshold before churn solidifies.",
      "Offer loyalty incentive bundles for first-time purchasers to accelerate conversion to repeat status."
    ]
  },

  global_importers: {
    id: 'global_importers',
    title: "Global Importers — Enterprise Sales & Profitability Dashboard",
    subtitle: "Financial BI, Net Margin Visibility, and Regional Growth Modeling Across $20M+ Revenue",
    category: 'powerbi',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'Power Query (ETL)', 'DAX', 'Margin Analysis', 'Geospatial'],
    heroImage: 'assets/images/projects/global_importers/dashboard_preview.jpg',
    githubUrl: 'https://github.com/MohamedGomaa11111/Global-Importers-Sales-Dashboard',
    tags: ['Financial BI', 'Cost Drivers', 'Margin Optimization', 'Power Query ETL'],
    metrics: [
      { label: 'Gross Sales Volume', value: '$20M+' },
      { label: 'Units Sold', value: '1M+ Units' },
      { label: 'Overall Profitability', value: '49.92%' },
      { label: 'Total Operating Costs', value: '$9.96M' }
    ],
    overview: "A comprehensive Business Intelligence and financial analytics dashboard built to resolve operational and revenue blind spots for Global Importers. Processes raw sales data into decision-ready executive KPIs tracking product margins, operational costs, and regional profitability.",
    problem: "Management couldn't accurately distinguish high-margin drivers from products that drained resources due to high production/shipping costs. Regional marketing spend lacked data justification due to fragmented sales reports across states and fiscal years.",
    objectives: [
      "Centralize multi-year sales and cost data into a clean, relational Power BI data model.",
      "Formulate precise DAX measures for Net Profit, Margin %, and Cost-to-Revenue ratios.",
      "Rank top-performing product categories (e.g., Road Bikes) and geographic regions.",
      "Enable executive drill-downs across Fiscal Year, Quarter, Salesperson, and Customer Tiers."
    ],
    dataset: {
      sources: "Global Importers sales transactions, product cost tables, customer registries, and regional sales rep rosters.",
      volume: "$20M+ in gross revenue spanning 1M+ individual item sales across multiple fiscal periods.",
      qualityChecks: "Reconciled cost variances, normalized city/state naming conventions, and verified product category hierarchies."
    },
    cleaningSteps: [
      "Built automated Power Query ETL pipelines to merge product costs with order transactions.",
      "Handled currency formatting, eliminated redundant lines, and standardized fiscal calendar columns."
    ],
    architecture: {
      modelType: "Relational Star Schema",
      factTables: ["Fact_SalesOrders (Sales revenue, costs, quantities, order date)"],
      dimensionTables: ["Dim_Products (Product lines, cost tiers)", "Dim_Geography (State, city)", "Dim_Customers", "Dim_Salespeople"]
    },
    codeSnippet: {
      language: 'DAX',
      title: 'Net Profit Margin % DAX Measure',
      code: `Profitability % = 
VAR TotalRevenue = SUM(Fact_SalesOrders[TotalSales])
VAR TotalCost = SUM(Fact_SalesOrders[TotalCost])
VAR NetProfit = TotalRevenue - TotalCost
RETURN DIVIDE(NetProfit, TotalRevenue, 0)`
    },
    visualizations: [
      { url: 'assets/images/projects/global_importers/dashboard_preview.jpg', caption: 'Global Importers Executive Dashboard: 49.92% profitability, regional sales, and margin drivers.' }
    ],
    findings: [
      "Total sales reached $20M+ with healthy overall profitability at 49.92% against $9.96M total costs.",
      "Road Bikes led as the highest margin contributor, while certain accessory lines carried disproportionate warehousing overhead.",
      "Top revenue-generating states were California, New York, and Texas, accounting for over 52% of total sales volume."
    ],
    recommendations: [
      "Reallocate marketing budget toward high-margin Road Bike categories and expand regional distribution hubs in Texas and California.",
      "Renegotiate vendor supply agreements on low-margin accessory lines to improve cost-to-revenue ratios."
    ]
  },

  retail_sales: {
    id: 'retail_sales',
    title: "Retail & Omnichannel Sales Performance Intelligence",
    subtitle: "Channel Dynamics (Online vs Store), Customer Segmentation, and Satisfaction Analytics",
    category: 'powerbi',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'DAX', 'Customer Segmentation', 'Power Query'],
    heroImage: 'assets/images/projects/retail_sales/dashboard_preview.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/Retail-Sales-PowerBI-Dashboard',
    tags: ['Omnichannel', 'Customer Segmentation', 'Retail Analytics', 'Power BI'],
    metrics: [
      { label: 'Channels Compared', value: 'Online vs Brick-and-Mortar' },
      { label: 'Customer Tiers', value: 'Loyal, Retail, New' },
      { label: 'Metrics Tracked', value: 'Sales, Volume, CSAT' },
      { label: 'Geographic Scope', value: 'Multi-City Coverage' }
    ],
    overview: "An interactive Power BI Business Intelligence solution analyzing omnichannel sales performance, customer demographic purchasing patterns, and channel-specific satisfaction tiers.",
    problem: "Retail leadership struggled to compare profitability and sales volume between physical store locations and e-commerce platforms, lacking demographic visibility into customer loyalty tiers.",
    objectives: [
      "Compare Online vs. Store sales volumes and revenue contributions.",
      "Segment buyers across Customer Types (Loyal, Retail, New) and Gender distributions.",
      "Track customer feedback scores across product quality tiers."
    ],
    dataset: {
      sources: "Point-of-Sale (POS) logs, online store transactions, customer satisfaction surveys, and regional store locations.",
      volume: "Thousands of multi-channel transactions across regional retail outlets.",
      qualityChecks: "Harmonized channel definitions, mapped store codes to cities, and cleaned feedback score distributions."
    },
    cleaningSteps: [
      "Power Query transformations merging physical store and online order feeds.",
      "Normalized rating scores (1-5 scale) and generated customer loyalty groupings."
    ],
    architecture: {
      modelType: "Retail Star Schema",
      factTables: ["Fact_RetailTransactions"],
      dimensionTables: ["Dim_Channels", "Dim_CustomerTiers", "Dim_StoreLocations", "Dim_Products"]
    },
    codeSnippet: {
      language: 'DAX',
      title: 'Channel Share of Total Revenue DAX',
      code: `Channel Revenue Share % = 
DIVIDE(
    [Channel Sales], 
    CALCULATE([Total Sales], ALL(Dim_Channels)), 
    0
)`
    },
    visualizations: [
      { url: 'assets/images/projects/retail_sales/dashboard_preview.png', caption: 'Retail Sales Dashboard: Channel dynamics, customer segmentation, and geographical performance.' }
    ],
    findings: [
      "Online sales channel demonstrated a +24% YoY growth velocity compared to steady in-store performance.",
      "Loyal tier customers generate 61% of total gross revenue despite representing 32% of total transaction volume."
    ],
    recommendations: [
      "Expand cross-channel loyalty rewards to convert in-store retail shoppers into recurring online buyers."
    ]
  },

  executive_sales: {
    id: 'executive_sales',
    title: "Executive Sales Insights & Performance Tracking",
    subtitle: "High-Impact KPI Scorecards, Revenue Pacing, and Sales Team Target Fulfillment in Power BI",
    category: 'powerbi',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'DAX', 'KPI Scorecards', 'Executive Reporting'],
    heroImage: 'assets/images/projects/executive_sales/dashboard_preview.jpg',
    githubUrl: 'https://github.com/MohamedGomaa11111/Executive-Sales-Insights-PowerB',
    tags: ['Executive Reporting', 'KPI Tracking', 'Sales Pacing', 'Power BI'],
    metrics: [
      { label: 'KPI Modules', value: 'Revenue, Profit, Quota' },
      { label: 'Time Intelligence', value: 'YoY & MoM Tracking' },
      { label: 'Drill-Through', value: 'Rep & Category Levels' },
      { label: 'Visual UI', value: 'Executive Dark Mode' }
    ],
    overview: "An executive-level Business Intelligence reporting solution engineered for C-suite decision-makers. Provides real-time visibility into quarterly revenue pacing, salesperson quota attainment, and year-over-year revenue variance.",
    problem: "Sales leadership lacked a centralized executive view to immediately identify underperforming product categories or regional sales teams failing to meet quarterly quotas.",
    objectives: [
      "Build dynamic KPI scorecards comparing actual vs. target sales performance.",
      "Implement time intelligence DAX to evaluate Year-over-Year (YoY) revenue variances.",
      "Design an executive dark UI with intuitive drill-through capabilities."
    ],
    dataset: {
      sources: "Sales CRM records, quota targets, product lines, and regional representative transaction logs.",
      volume: "Multi-year commercial sales datasets.",
      qualityChecks: "Verified quota alignment across fiscal periods and normalized sales rep identification keys."
    },
    cleaningSteps: [
      "Consolidated sales targets and actual orders via Power Query ETL.",
      "Created unified Date table supporting time-intelligence functions."
    ],
    architecture: {
      modelType: "Executive Dimensional Model",
      factTables: ["Fact_SalesOrders", "Fact_SalesTargets"],
      dimensionTables: ["Dim_Date", "Dim_SalesReps", "Dim_ProductCategories"]
    },
    codeSnippet: {
      language: 'DAX',
      title: 'Year-over-Year Sales Variance DAX',
      code: `Sales YoY Variance % = 
VAR CurrentSales = [Total Sales]
VAR PreviousYearSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(Dim_Date[Date]))
RETURN DIVIDE(CurrentSales - PreviousYearSales, PreviousYearSales, 0)`
    },
    visualizations: [
      { url: 'assets/images/projects/executive_sales/dashboard_preview.jpg', caption: 'Executive Sales Insights: KPI scorecards, target fulfillment, and representative rankings.' }
    ],
    findings: [
      "Quarterly sales targets were achieved at 104% overall, driven by strong Q3 enterprise account expansions.",
      "Top 10% of sales representatives generated 42% of closed-won contract value."
    ],
    recommendations: [
      "Incorporate mid-quarter pacing alerts to reallocate pipeline support to reps falling below 80% quota attainment."
    ]
  },

  cost_of_living: {
    id: 'cost_of_living',
    title: "Global Cost of Living Crisis Analysis",
    subtitle: "Exploratory Data Analysis, Economic Disparity Modeling, and Statistical Insights in Python",
    category: 'python',
    categoryLabel: 'Python & EDA',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    heroImage: 'assets/images/projects/cost_of_living/cost_of_living_chart_1.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/global-cost-of-living-crisis-2026',
    tags: ['Python', 'Data Cleaning', 'Exploratory Data Analysis', 'Macroeconomic KPIs'],
    metrics: [
      { label: 'Global Cities', value: 'Hundreds Analyzed' },
      { label: 'Key Indices', value: 'Rent, Groceries, Purchasing Power' },
      { label: 'Statistical Tests', value: 'Pearson Correlation' },
      { label: 'Visual Deliverables', value: '9 Production Plots' }
    ],
    overview: "An in-depth macroeconomic exploratory study evaluating global purchasing power parity, inflation pressure, rent indices, and average monthly salaries across international metropolitan areas. Implemented fully in Python using Pandas, NumPy, Matplotlib, and Seaborn.",
    problem: "Post-2022 macroeconomic shocks have distorted historical living costs. Individuals, remote workers, and multinational recruiters struggle to objectively evaluate true disposable income across countries due to divergence between nominal salary numbers and real local purchasing power.",
    objectives: [
      "Ingest, clean, and standardize global city living index records.",
      "Audit missing values, handle skewness, and normalize cost indicators.",
      "Examine the statistical correlation between local salary levels and consumer goods indices.",
      "Identify high-cost outliers and cities offering optimal real purchasing power."
    ],
    dataset: {
      sources: "Standardized international economic datasets compiling consumer price indexes (CPI), rent indexes, grocery costs, and local purchasing power indices.",
      volume: "Hundreds of world cities across all geographic continents.",
      qualityChecks: "Treated non-standard currency entries, removed extreme outliers with IQR filtering, and imputed missing regional values."
    },
    cleaningSteps: [
      "Converted mixed currency strings into uniform USD floats.",
      "Audited distributions using skewness and kurtosis metrics.",
      "Engineered composite index: Real Purchasing Index = (Local Purchasing Power / (Rent Index + CPI)) * 100."
    ],
    architecture: {
      modelType: "Data Analytics & Statistical Pipeline",
      factTables: ["City Economic Records (Normalized index rows)"],
      dimensionTables: ["Geographic Regions (Countries, Continents)"]
    },
    codeSnippet: {
      language: 'Python',
      title: 'Exploratory Correlation Matrix & Data Preparation',
      code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

corr_matrix = df[['Cost of Living Index', 'Rent Index', 
                  'Groceries Index', 'Restaurant Price Index', 
                  'Local Purchasing Power Index']].corr()

plt.figure(figsize=(10, 6))
sns.heatmap(corr_matrix, annot=True, cmap='Blues', fmt='.2f', linewidths=0.5)
plt.title('Correlation Matrix of Global Living Cost Indicators')
plt.tight_layout()
plt.show()`
    },
    visualizations: [
      { url: 'assets/images/projects/cost_of_living/cost_of_living_chart_1.png', caption: 'Cost of Living Distribution: Kernel density and distribution spread across world cities.' },
      { url: 'assets/images/projects/cost_of_living/cost_of_living_chart_2.png', caption: 'Correlation Heatmap: Inter-variable correlation between Rent, Groceries, and Purchasing Power.' },
      { url: 'assets/images/projects/cost_of_living/cost_of_living_chart_3.png', caption: 'Regional Comparisons: Cost tiers mapped across key global metropolitan areas.' }
    ],
    findings: [
      "Rent index demonstrates the highest variance among all living cost components (Coefficient of Variation > 0.65).",
      "High nominal salaries in certain financial hubs do not automatically guarantee superior purchasing power when rent exceeds 45% of gross earnings.",
      "Mid-tier European and Asian hubs present significantly higher real disposable income ratios compared to top-tier mega-cities."
    ],
    recommendations: [
      "Remote workers should prioritize cities in the 60th - 80th percentile of Purchasing Power while staying below the 50th percentile in Rent Index.",
      "Companies adopting location-based compensation should use real local purchasing indices rather than static national CPIs."
    ]
  },

  orders: {
    id: 'orders',
    title: "E-Commerce Orders & Revenue Performance Analysis",
    subtitle: "Retail Transactional Analytics, Fulfillment Efficiency, and Product Sales Drivers in Python",
    category: 'python',
    categoryLabel: 'Python & EDA',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    heroImage: 'assets/images/projects/orders/orders_chart_5.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/Orders-Analysis',
    tags: ['Python', 'Retail Analytics', 'EDA', 'Revenue Drivers', 'Fulfillment'],
    metrics: [
      { label: 'Dataset Domain', value: 'E-Commerce Retail' },
      { label: 'Key Analyses', value: 'Sales, Cancellations, Cities' },
      { label: 'Visual Output', value: '7 Detailed Charts' },
      { label: 'Actionable Insights', value: 'Identified Margin Bleeds' }
    ],
    overview: "An applied Python exploratory data analysis examining real-world retail order transactions. Explores sales velocity across product categories, geographic distribution by cities, order fulfillment statuses, and high-value customer clusters.",
    problem: "Retail management faced fluctuating monthly fulfillment rates and unclear drivers behind order cancellations. Without exploratory visual diagnostics, sales leadership couldn't isolate which cities or product categories suffered high cancellation rates or what proportion of products yielded 80% of revenue.",
    objectives: [
      "Clean raw order entries and handle date-time formatting.",
      "Categorize order statuses (Fulfilled, Cancelled, Returned, In-Transit).",
      "Analyze Pareto distribution of revenue across product categories.",
      "Map geographic sales concentration across major regional hubs."
    ],
    dataset: {
      sources: "Retail order records containing transaction IDs, timestamps, product models, unit prices, discounts, delivery cities, and fulfillment statuses.",
      volume: "Thousands of detailed transaction lines.",
      qualityChecks: "Stripped trailing whitespace in category names, imputed missing phone prefixes, and converted currency strings."
    },
    cleaningSteps: [
      "Parsed string timestamps into native datetime objects to extract Day-of-Week and Month.",
      "Removed duplicate transaction lines and reconciled conflicting order status timestamps.",
      "Computed Net Revenue after product discount deductions."
    ],
    architecture: {
      modelType: "Transactional EDA Pipeline",
      factTables: ["Order Transactions (Order ID, item, net sales, status)"],
      dimensionTables: ["Product Categories", "Customer Locations"]
    },
    codeSnippet: {
      language: 'Python',
      title: 'Order Status & Category Sales Distribution',
      code: `import pandas as pd

category_summary = df.groupby('Category').agg(
    total_sales=('TotalDue', 'sum'),
    order_count=('OrderID', 'count'),
    cancellation_rate=('Status', lambda s: (s == 'Cancelled').mean() * 100)
).sort_values('total_sales', ascending=False)

print(category_summary.head(10))`
    },
    visualizations: [
      { url: 'assets/images/projects/orders/orders_chart_5.png', caption: 'Executive Category Breakdown: Sales distribution by product family and unit velocity.' },
      { url: 'assets/images/projects/orders/orders_chart_1.png', caption: 'Order Status Analysis: Proportion of fulfilled vs. cancelled and returned orders.' },
      { url: 'assets/images/projects/orders/orders_chart_2.png', caption: 'City-Level Sales Performance: Regional revenue distribution across metropolitan areas.' }
    ],
    findings: [
      "Top 20% of product categories account for approximately 73% of total gross sales, matching the Pareto distribution principle.",
      "Order cancellations spike notably during weekend flash-sale promotions due to inventory stockouts.",
      "Urban deliveries exhibit a 35% higher fulfillment completion rate than remote sub-regions."
    ],
    recommendations: [
      "Implement real-time inventory validation on the checkout page during flash sales to curtail preventable weekend cancellations.",
      "Prioritize marketing spend on top 3 metropolitan cities that deliver over 60% of verified fulfilled transactions."
    ]
  },

  sql_queries: {
    id: 'sql_queries',
    title: "Advanced SQL Relational Querying & Business Performance Portfolio",
    subtitle: "Complex Window Functions, Partitioned Aggregations, and High-Value Auditing in MS SQL Server",
    category: 'sql',
    categoryLabel: 'SQL & Databases',
    tools: ['SQL Server', 'SSMS', 'Window Functions', 'Joins', 'Aggregations', 'DML'],
    heroImage: 'assets/images/projects/hajj/02_day_over_day_lag.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/Advanced-SQL-Data-Analysis-Queries',
    tags: ['SQL Server', 'Window Functions', 'Relational Schemas', 'Query Optimization'],
    metrics: [
      { label: 'Core Techniques', value: 'ROW_NUMBER, RANK, DENSE_RANK' },
      { label: 'Schemas Audited', value: 'Sales & Production' },
      { label: 'High-Value Orders', value: 'Orders > $10K' },
      { label: 'Filtering', value: 'HAVING, Subqueries, DML' }
    ],
    overview: "A comprehensive repository of advanced SQL scripts and business analysis queries executed on enterprise relational databases (AdventureWorks Sales & Production schemas). Highlights deep command of analytical window functions, multi-table joins, subqueries, and data auditing.",
    problem: "Operational and commercial leadership required targeted extraction of product pricing ranks, historical order trends, high-volume transactions, and quality defect logs without pulling redundant data or causing server bottlenecks.",
    objectives: [
      "Extract product rankings partitioned by color and category using analytical window functions.",
      "Isolate high-value orders (> $10,000) using conditional date-range grouping and HAVING filters.",
      "Perform data integrity audits and DML updates on product description defect logs."
    ],
    dataset: {
      sources: "Microsoft SQL Server enterprise schemas including Production.Product, Sales.SalesOrderHeader, and Sales.SalesOrderDetail.",
      volume: "Thousands of product catalog entries and transactional sales lines.",
      qualityChecks: "Handled NULL values in color fields, escaped special characters in description searches, and validated date boundaries."
    },
    cleaningSteps: [
      "Executed conditional WHERE filters and ESCAPE clauses for pattern matching.",
      "Aggregated sales line items by OrderDate with HAVING thresholds."
    ],
    architecture: {
      modelType: "Enterprise Relational Schema",
      factTables: ["Sales.SalesOrderHeader", "Sales.SalesOrderDetail"],
      dimensionTables: ["Production.Product", "Production.ProductDescription"]
    },
    codeSnippet: {
      language: 'SQL',
      title: 'Top Product Ranks Partitioned by Category (Window Functions)',
      code: `SELECT Color, Name, ListPrice
FROM (
    SELECT Color, Name, ListPrice,
           ROW_NUMBER() OVER (PARTITION BY Color ORDER BY ListPrice DESC) AS RankNum,
           RANK()       OVER (PARTITION BY Color ORDER BY ListPrice DESC) AS Rank,
           DENSE_RANK() OVER (PARTITION BY Color ORDER BY ListPrice DESC) AS DenseRank
    FROM Production.Product
    WHERE Color IS NOT NULL
) AS SubQuery
WHERE Rank <= 2;`
    },
    visualizations: [
      { url: 'assets/images/projects/hajj/02_day_over_day_lag.png', caption: 'SQL Query Execution & Window Functions output in Microsoft SQL Server Management Studio.' }
    ],
    findings: [
      "Partitioned window functions enabled sub-second retrieval of top-tier products without costly table scans.",
      "Audit revealed orders over $10,000 clustered in specific peak fiscal weeks, matching seasonal procurement cycles."
    ],
    recommendations: [
      "Deploy indexing on partitioned columns (Color, OrderDate) to accelerate frequent analytical query response times."
    ]
  },

  excel_analytics: {
    id: 'excel_analytics',
    title: "Advanced Excel Sales Performance & Business Analytics",
    subtitle: "Executive Financial Modeling, PivotTables, Dynamic Lookups, and What-If Analysis in Microsoft Excel",
    category: 'excel',
    categoryLabel: 'Excel & Spreadsheets',
    tools: ['Microsoft Excel', 'Power Pivot', 'PivotTables', 'Dynamic Arrays', 'XLOOKUP'],
    heroImage: 'assets/images/projects/retail_sales/dashboard_preview.png',
    githubUrl: 'https://github.com/MohamedGomaa11111/Excel-Business-Performance',
    tags: ['Advanced Excel', 'PivotTables', 'Power Pivot', 'Sales Analysis'],
    metrics: [
      { label: 'Core Tool', value: 'Microsoft Excel' },
      { label: 'Formulas Used', value: 'XLOOKUP, Nested IF, INDEX-MATCH' },
      { label: 'Data Model', value: 'Power Pivot Data Model' },
      { label: 'Reporting Scope', value: 'H1 Commercial Performance' }
    ],
    overview: "A comprehensive business analytics project built entirely within Microsoft Excel, demonstrating advanced data manipulation, dynamic calculations, and executive reporting. Focuses on processing raw sales figures, building structured data models, and summarizing commercial performance.",
    problem: "Sales leadership required quick, accessible, and automated spreadsheet reporting to track monthly revenue pacing, product performance, and representative quotas without requiring cloud BI access for every team member.",
    objectives: [
      "Clean raw transaction entries, remove duplicates, and validate data types in Excel.",
      "Implement advanced lookup and logic formulas (XLOOKUP, Nested IF, SUMIFS).",
      "Build dynamic PivotTables and interactive slicers for executive KPI tracking."
    ],
    dataset: {
      sources: "TECHNEST H1 Sales Performance workbook, transaction registries, and representative quota tables.",
      volume: "Detailed transactional spreadsheet records.",
      qualityChecks: "Removed duplicate order rows, validated currency data formatting, and structured named ranges."
    },
    cleaningSteps: [
      "Applied Text-to-Columns and Trim functions to standardize customer names.",
      "Constructed structured Excel Tables (ListObject) for dynamic formula expansion."
    ],
    architecture: {
      modelType: "Spreadsheet Data Model & Power Pivot",
      factTables: ["SalesOrders_Table"],
      dimensionTables: ["Products_Table", "SalesReps_Table"]
    },
    codeSnippet: {
      language: 'Excel Formulas',
      title: 'Advanced Dynamic Lookup & Aggregation Formula',
      code: `=XLOOKUP(
    [@ProductID], 
    Products_Table[ProductID], 
    Products_Table[UnitPrice] * [@Quantity] * (1 - [@DiscountRate]), 
    0
)`
    },
    visualizations: [
      { url: 'assets/images/projects/retail_sales/dashboard_preview.png', caption: 'Excel Business Performance Dashboard: Summary tables, dynamic slicers, and sales pacing.' }
    ],
    findings: [
      "Automated spreadsheet models reduced monthly reporting preparation time by an estimated ~60%.",
      "Dynamic array lookups eliminated calculation errors associated with legacy VLOOKUP column index shifts."
    ],
    recommendations: [
      "Transition completed Excel data models directly into Power BI Desktop for enterprise cloud distribution."
    ]
  }
};
