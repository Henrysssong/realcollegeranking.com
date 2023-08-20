import React from 'react';
import './CollegeRankings.css';

const CollegeRankings = () => {
    const colleges = [
        { rank: 1, name: "Massachusetts Institute of Technology (MIT)" },
        { rank: 2, name: "California Institute of Technology (Caltech)" },
        { rank: 3, name: "Harvard University" },
        { rank: 4, name: "Stanford University" },
        { rank: 5, name: "Princeton University" },
        { rank: 6, name: "University of Chicago" },
        { rank: 7, name: "Yale University" },
        { rank: 8, name: "Columbia University" },
        { rank: 9, name: "University of Pennsylvania" },
        { rank: 10, name: "Duke University" },
        { rank: 11, name: "Johns Hopkins University" },
        { rank: 12, name: "Northwestern University" },
        { rank: 13, name: "Dartmouth College" },
        { rank: 14, name: "Brown University" },
        { rank: 15, name: "University of Notre Dame" },
        { rank: 16, name: "Vanderbilt University" },
        { rank: 17, name: "Cornell University" },
        { rank: 18, name: "Rice University" },
        { rank: 19, name: "Washington University in St. Louis" },
        { rank: 20, name: "University of California, Los Angeles (UCLA)" },
        { rank: 21, name: "Emory University" },
        { rank: 22, name: "University of California, Berkeley (UC Berkeley)" },
        { rank: 23, name: "University of Southern California (USC)" },
        { rank: 24, name: "Carnegie Mellon University" },
        { rank: 25, name: "University of Virginia" },
        { rank: 26, name: "University of Michigan, Ann Arbor" },
        { rank: 27, name: "Wake Forest University" },
        { rank: 28, name: "Georgetown University" },
        { rank: 29, name: "University of Florida" },
        { rank: 30, name: "University of North Carolina, Chapel Hill" },
        { rank: 31, name: "Boston College" },
        { rank: 32, name: "New York University (NYU)" },
        { rank: 33, name: "University of Rochester" },
        { rank: 34, name: "University of California, Santa Barbara (UCSB)" },
        { rank: 35, name: "University of California, Irvine (UCI)" },
        { rank: 36, name: "University of California, San Diego (UCSD)" },
        { rank: 37, name: "University of California, Davis (UCD)" },
        { rank: 38, name: "University of Wisconsin, Madison" },
        { rank: 39, name: "University of Illinois, Urbana-Champaign" },
        { rank: 40, name: "University of Texas, Austin" },
        { rank: 41, name: "University of Georgia" },
        { rank: 42, name: "University of Washington, Seattle" },
        { rank: 43, name: "Ohio State University, Columbus" },
        { rank: 44, name: "University of Maryland, College Park" },
        { rank: 45, name: "Pennsylvania State University, University Park" },
        { rank: 46, name: "University of Minnesota, Twin Cities" },
        { rank: 47, name: "Purdue University, West Lafayette" },
        { rank: 48, name: "Rutgers University, New Brunswick" },
        { rank: 49, name: "University of Massachusetts, Amherst" },
        { rank: 50, name: "Indiana University, Bloomington" },
        { rank: 51, name: "Michigan State University" },
        { rank: 52, name: "University of Iowa" },
        { rank: 53, name: "University of Connecticut" },
        { rank: 54, name: "University of Colorado, Boulder" },
        { rank: 55, name: "University of Pittsburgh, Pittsburgh Campus" },
        { rank: 56, name: "University of California, Santa Cruz (UCSC)" },
        { rank: 57, name: "University of Oregon" },
        { rank: 58, name: "University of Arizona" },
        { rank: 59, name: "University of Alabama, Tuscaloosa" },
        { rank: 60, name: "Florida State University" }
    ];
    
    

    return (
        <div className="rankings-container">
            <h2>Difficulty Rankings</h2>
            <ul>
                {colleges.map(college => (
                    <li key={college.rank}>
                        <span className="rank">{college.rank}</span>
                        <span className="college-name">{college.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CollegeRankings;
