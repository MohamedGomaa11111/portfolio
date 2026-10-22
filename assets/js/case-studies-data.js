/**
 * Mohamed Gomaa - Portfolio Case Studies Data
 * Verified analytical case studies based on authentic project records.
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

    problem: "Fragmented historical records across 92 years of tournament play presented significant hurdles: inconsistent historical team naming (e.g., historical geopolitical changes), missing or poorly formatted match logs, lack of standardized stadium capacities, and absence of an audited, high-performance data model. Analysts and stakeholders lacked a unified dashboard capable of evaluating host-nation win rate boost, historical scoring evolution, and multi-tournament attendance patterns without performance lag or relationship ambiguity.",

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
      qualityChecks: "Resolved country name historical changes (e.g., West Germany, Soviet Union), audited null attendance records, and validated extra-time vs. penalty shootout goal flags."
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
    DIVIDE(
        [Total Matches Won], 
        [Total Matches Played], 
        0
    )
VAR HostWinRate = 
    DIVIDE(
        CALCULATE([Total Matches Won], Fact_Matches[IsHostMatch] = TRUE()),
        CALCULATE([Total Matches Played], Fact_Matches[IsHostMatch] = TRUE()),
        0
    )
RETURN 
    HostWinRate - OverallWinRate`
    },

    visualizations: [
      { url: 'assets/images/projects/fifa/dashboard_home.png', caption: 'Landing & Executive KPI Overview: Macro-level tournament indicators and navigation.' },
      { url: 'assets/images/projects/fifa/data_schema.png', caption: 'Data Architecture: Pure Star Schema with unidirectional filter context.' },
      { url: 'assets/images/projects/fifa/historical_overview.png', caption: 'Historical Overview: Historical tournament progression and champion conversion.' },
      { url: 'assets/images/projects/fifa/goals_insights.png', caption: 'Match Dynamics & Goals: Goal timing distributions and penalty shootout metrics.' },
      { url: 'assets/images/projects/fifa/stadiums_attendance.png', caption: 'Global Attendance: Stadium capacity distribution and geospatial mapping.' },
      { url: 'assets/images/projects/fifa/team_performance.png', caption: 'Team Performance: Win rate benchmarking and historical podium finishes.' }
    ],

    findings: [
      "Host nations enjoy a statistically verified win-rate boost of +14.2% compared to neutral tournament environments.",
      "Average goals per match peaked in the 1954 edition (5.38 goals/match) before stabilizing into modern tactical eras at ~2.7 goals/match.",
      "USA 1994 and Qatar 2022 represent all-time attendance peaks, driving cumulative global attendance past 40 million attendees.",
      "Only 8 unique nations have ever hoisted the World Cup trophy across 22 editions, underscoring high historical concentration of titles."
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
        PARTITION BY route_name 
        ORDER BY day
    ) AS prev_day_avg_delay,
    ROUND(
        avg_delay_minutes - LAG(avg_delay_minutes) OVER (
            PARTITION BY route_name 
            ORDER BY day
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
      "Double water distribution capacity in Muzdalifah South during the 18:00 - 22:00 peak interval to reduce wait times by an estimated ~40%.",
      "Implement automated threshold alerts in SQL to notify logistics managers when delay progression exceeds +1.0 minute DoD."
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

# Compute correlation matrix across core economic indicators
corr_matrix = df[['Cost of Living Index', 'Rent Index', 
                  'Groceries Index', 'Restaurant Price Index', 
                  'Local Purchasing Power Index']].corr()

# Visualize heatmap with custom dark styling
plt.figure(figsize=(10, 6))
sns.heatmap(corr_matrix, annot=True, cmap='Blues', fmt='.2f', 
            linewidths=0.5, cbar=True)
plt.title('Correlation Matrix of Global Living Cost Indicators', fontsize=14, pad=15)
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
import matplotlib.pyplot as plt
import seaborn as sns

# Aggregate sales and cancellation rate by product category
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
  }
};
